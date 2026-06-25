import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">VASEEGARAN</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vaseegaran-nandakumar-53b573216/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/VaseegaranN" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:vaseegaran.n@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2026 Vaseegaran N. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
