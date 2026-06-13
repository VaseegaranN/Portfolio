# React.js Professional Portfolio 🚀

A high-performance, responsive React.js and Vite developer portfolio. Designed with modern dark-mode aesthetics, custom CSS transitions, and advanced interactive animations.

Live URL: **[https://vaseegaran.github.io/Portfolio/](https://vaseegaran.github.io/Portfolio/)**

---

## ✨ Design Features & User Experience

### 1. Unified Neon Blue Visual System
- Hand-crafted vanilla CSS color variables utilizing a core **Neon Blue (`#4db5ff`)** accent on a deep carbon-charcoal body (`#0b0b0c`) for a polished and high-end look.
- Interactive glowing outlines, typography highlight rules, and active indicators matching the neon blue palette.

### 2. Interactive Mouse Spotlight (60fps Gradient)
- Embedded event listener tracking client mouse coordinates dynamically.
- Throttled layout computations using `requestAnimationFrame` for buttery-smooth performance.
- Radial gradient background overlay that follows the cursor, illuminating glassmorphic cards and headers.

### 3. Dynamic Profile Background Cutout (`TransparentImage.jsx`)
- Utilizes a custom, client-side React component that renders the portrait photo (`portfolio.jpeg`) onto a hidden HTML5 Canvas.
- Executes an edge-based **Breadth-First Search (BFS) flood-fill algorithm** at load time to automatically detect and transparentize white background pixels.
- Preserves the white details inside the body contour (like the stripes of the shirt and eyes) while overlaying the portrait cleanly on top of the background circle with no rectangular borders.

### 4. Categorized Portfolio Project Filtering
- Split tabs panel in the project showcase:
  - **On Duty (Enterprise)**: Backend systems, cloud integrations, and enterprise .NET ecosystem services.
  - **Off Duty (Research)**: Personal mobile apps, machine learning models, and automation scripts.
- Bouncy active indicator state that slides smoothly between tabs.

### 5. Floating Navigation Dock
- Glassmorphic sliding dock anchored at the bottom center of the screen.
- Bouncy active item slider matching the current section route.
- Active viewport tracking (Scroll-Spy) updating current section highlights automatically as you scroll.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React.js 19, Vite 8
- **Styling**: Vanilla CSS, FontAwesome 6, Google Fonts (Poppins)
- **Deployment**: GitHub Pages (live build)

### File Structure
```
Portfolio/
├── public/
│   ├── assets/           # General images, legacy CSS, SCSS templates
│   ├── favicon.svg       # Brand favicon
│   └── portfolio.jpeg    # Portrait photo (processed by Canvas)
├── src/
│   ├── assets/           # React compilation image assets
│   ├── components/       # Modular React sections
│   │   ├── about/        # About section (biography, experience cards)
│   │   ├── contact/      # Contact section (email, messaging links)
│   │   ├── experience/   # Professional skills grid
│   │   ├── footer/       # Footer details & permalinks
│   │   ├── header/       # Hero area, top hamburger menu, and Canvas image loader
│   │   ├── nav/          # Floating sliding navigation dock
│   │   ├── portfolio/    # Enterprise vs. research project categories
│   │   └── services/     # Specializations & service cards
│   ├── App.jsx           # Coordinate trackers & app entry point layout
│   ├── index.css         # Custom dark-theme variables, spotlight grid, and media queries
│   └── main.jsx          # React DOM renderer
├── index.html            # Core metadata configurations
└── vite.config.js        # Vite build optimization pipelines
```

---

## 🚀 Getting Started

To run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/VaseegaranN/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for production
```bash
npm run build
```
Production assets will compile into the `dist/` directory.
