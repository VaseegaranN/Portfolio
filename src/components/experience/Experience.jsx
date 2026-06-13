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
              <small className="date">May 2025 - Present | Coimbatore, India</small>
              <ul>
                <li>Designed and implemented the backend architecture for a Private Land Parking Enforcement automation framework.</li>
                <li>Programmed robust data ingestion paths for high-frequency CCTV / ANPR stream captures.</li>
                <li>Built resilient third-party lookup integrations utilizing the Illumin8 processing platform.</li>
                <li>Developed full-featured back-office queue panels inside the core solution platform.</li>
              </ul>
            </article>

            <article className="timeline__card">
              <h4>Software Engineer Intern</h4>
              <h5>Logicvalley Technologies</h5>
              <small className="date">Oct 2024 - May 2025 | Coimbatore, India</small>
              <ul>
                <li>Extended core features of the enterprise .NET application platform, optimizing relational SQL schemas.</li>
                <li>Coded state-machine triggers to manage multi-tiered financial escalation rules.</li>
                <li>Authored automated image-deletion hooks and clean-slate transaction purges.</li>
              </ul>
            </article>

          </div>
        </div>

        {/* === Right: Skills Group === */}
        <div className="experience__skills-section">
          <h3>Technical Skills</h3>
          <div className="experience__skills-container">
            
            <div className="experience__section">
              <h3>Languages & Frameworks</h3>
              <div className="skills__details-grid">
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>C# & .NET Core</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Java</h4>
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
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>PHP</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>HTML5/CSS3</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>

            <div className="experience__section">
              <h3>Databases & Systems</h3>
              <div className="skills__details-grid">
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>SQL Server</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>MySQL</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>State Machines</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>RDBMS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>

            <div className="experience__section">
              <h3>Developer Tools</h3>
              <div className="skills__details-grid">
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Visual Studio</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>VS Code</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Git & GitHub</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Android Studio</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Firebase</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Blender</h4>
                    <small className="text-light">Basic</small>
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
