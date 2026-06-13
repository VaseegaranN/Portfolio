import React from 'react';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        {/* Left Side: Content & Actions */}
        <div className="header__content">
          <h5>Hello,</h5>
          <h1>I'm Vaseegaran N</h1>
          <h5 className="text-light typewriter">I Am Software Engineer</h5>
          
          <div className="header__cta">
            <a href="#contact" className="btn btn-primary">
              CONTACT US <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
            </a>
          </div>

          <div className="header__socials">
            <a href="https://linkedin.com/in/vaseegaran-n-53b573216" target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/VASEEGARAN" target="_blank" rel="noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:vaseegaran.n@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Image and Backdrop Shape */}
        <div className="header__right">
          <div className="header__backdrop"></div>
          <div className="header__image-wrapper">
            <img src={`${import.meta.env.BASE_URL}portfolio.jpeg`} alt="Vaseegaran N" />
          </div>
        </div>

        <a href="#contact" className="header__scroll-down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;



