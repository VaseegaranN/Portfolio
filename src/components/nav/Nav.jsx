import React, { useState, useEffect, useRef } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, height: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250; // Offset to detect section entry early

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(`#${section}`);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding indicator position when activeNav changes or window resizes
  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = navRef.current?.querySelector('a.active');
      if (activeLink) {
        const parentRect = navRef.current.getBoundingClientRect();
        const activeRect = activeLink.getBoundingClientRect();
        setIndicatorStyle({
          left: activeRect.left - parentRect.left,
          width: activeRect.width,
          height: activeRect.height,
          opacity: 1
        });
      }
    };

    // Use requestAnimationFrame to ensure the DOM has completed rendering
    const rafId = requestAnimationFrame(updateIndicator);

    window.addEventListener('resize', updateIndicator);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeNav]);

  return (
    <nav ref={navRef}>
      {/* Sliding Active Indicator Background */}
      <div 
        className="nav__indicator" 
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          height: `${indicatorStyle.height}px`,
          opacity: indicatorStyle.opacity
        }}
      />

      <a 
        href="#home" 
        onClick={() => setActiveNav('#home')} 
        className={activeNav === '#home' ? 'active' : ''} 
        title="Home"
      >
        <i className="fas fa-home"></i>
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''} 
        title="About"
      >
        <i className="fas fa-user"></i>
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''} 
        title="Experience"
      >
        <i className="fas fa-briefcase"></i>
      </a>
      <a 
        href="#services" 
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#services' ? 'active' : ''} 
        title="Services"
      >
        <i className="fas fa-cogs"></i>
      </a>
      <a 
        href="#projects" 
        onClick={() => setActiveNav('#projects')} 
        className={activeNav === '#projects' ? 'active' : ''} 
        title="Projects"
      >
        <i className="fas fa-project-diagram"></i>
      </a>
      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''} 
        title="Contact"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </nav>
  );
};

export default Nav;
