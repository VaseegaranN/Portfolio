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
              <small>1.9 Years Industry Experience</small>
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
            Results-oriented .NET Full Stack Developer with 1.9 years of experience designing, developing, and maintaining scalable web applications and backend services using C#, ASP.NET Core, .NET Web API, SQL Server, and modern front-end technologies. Skilled in building secure RESTful APIs, optimizing database performance, and implementing business-critical workflow automation solutions. Experienced in translating complex business requirements into reliable, high-performance software systems. Strong collaborator with a passion for clean code, continuous improvement, and delivering measurable business value.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
