import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills & Experience I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* === Left: Professional Timeline === */}
        <div className="experience__timeline-section">
          <h3 className="section-subtitle">Work History</h3>
          <div className="experience__timeline">
            
            <article className="timeline__card">
              <h4>Software Engineer</h4>
              <h5>Logicvalley Technologies</h5>
              <small className="date">Oct 2024 - June 2026 | Coimbatore, India</small>
              <ul>
                <li>Developed and maintained enterprise-grade backend services using C# and .NET technologies to support high-volume transaction processing workflows.</li>
                <li>Developed backend modules supporting end-to-end parking charge lifecycle management.</li>
                <li>Built API-driven workflows for automated validation, case processing, and enforcement activities.</li>
                <li>Implemented business rule engines for workflow orchestration and state transitions.</li>
                <li>Optimized database operations to improve processing efficiency and system scalability.</li>
              </ul>
              <div className="achievements" style={{ marginTop: '1.2rem' }}>
                <h5 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: '600' }}>Key Achievements:</h5>
                <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', marginTop: '0.2rem' }}>
                  <li style={{ marginBottom: '0.2rem' }}>Improved application performance through SQL optimization and backend enhancements.</li>
                  <li style={{ marginBottom: '0.2rem' }}>Automated critical business workflows, reducing manual intervention and increasing processing efficiency.</li>
                  <li style={{ marginBottom: '0.2rem' }}>Delivered scalable API-driven solutions supporting high-volume transactional operations.</li>
                </ul>
              </div>
            </article>

          </div>
        </div>

        {/* === Right: Skills Group === */}
        <div className="experience__skills-section">
          <h3>Technical Skills</h3>
          <div className="experience__skills-container">
            
            <div className="experience__section">
              <h3>Programming Languages</h3>
              <div className="skills__details-grid">
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>C#</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Beginner</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>SQL</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>HTML5</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>CSS3</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Python</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>

            <div className="experience__section">
              <h3>Backend Development</h3>
              <div className="skills__details-grid">
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>ASP.NET Core</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>.NET Web API</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Entity Framework Core</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>RESTful API Development</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Authentication & Authorization</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Microservices Fundamentals</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
