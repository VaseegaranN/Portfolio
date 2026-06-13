import React, { useState, useEffect } from 'react';

const TransparentImage = ({ src, alt, className, threshold = 238, ...props }) => {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Flood fill from borders
      const visited = new Uint8Array(width * height);
      const queue = [];

      const pushPixel = (x, y) => {
        if (x < 0 || x >= width || y < 0 || y >= height) return;
        const idx = y * width + x;
        if (visited[idx]) return;

        const dataIdx = idx * 4;
        const r = data[dataIdx];
        const g = data[dataIdx + 1];
        const b = data[dataIdx + 2];

        // Check if pixel is close to white
        if (r >= threshold && g >= threshold && b >= threshold) {
          visited[idx] = 1;
          data[dataIdx + 3] = 0; // Set alpha to 0 (transparent)
          queue.push(idx);
        }
      };

      // Add all pixels along the 4 edges of the image to start the queue
      for (let x = 0; x < width; x++) {
        pushPixel(x, 0);
        pushPixel(x, height - 1);
      }
      for (let y = 0; y < height; y++) {
        pushPixel(0, y);
        pushPixel(width - 1, y);
      }

      // Breadth-First Search (BFS) for connected components
      let head = 0;
      while (head < queue.length) {
        const idx = queue[head++];
        const x = idx % width;
        const y = Math.floor(idx / width);

        pushPixel(x + 1, y);
        pushPixel(x - 1, y);
        pushPixel(x, y + 1);
        pushPixel(x, y - 1);
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
  }, [src, threshold]);

  return <img src={processedSrc} alt={alt} className={className} {...props} />;
};

export default TransparentImage;
