import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={`${import.meta.env.BASE_URL}assets/img/about-me.png`} alt="Vaseegaran N" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <i className="fas fa-briefcase"></i>
              <h5>Experience</h5>
              <small>1.5+ Years Industry Experience</small>
            </article>

            <article className="about__card">
              <i className="fas fa-graduation-cap"></i>
              <h5>Education</h5>
              <small>B.Tech IT (8.72 CGPA)</small>
            </article>

            <article className="about__card">
              <i className="fas fa-folder-open"></i>
              <h5>Projects</h5>
              <small>End-to-End Solutions Published</small>
            </article>
          </div>

          <p>
            Performance-driven Software Engineer specializing in full-stack engineering, .NET ecosystems, and automated workflow environments. Experienced in architecting state-driven process engines, optimizing relational database architectures, and deploying machine learning solutions. Adept at translating complex operational workflows into highly scalable back-office automation pipelines, robust telemetry ingestion loops, and secure user management platforms.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
