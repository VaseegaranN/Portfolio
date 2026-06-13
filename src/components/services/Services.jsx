import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        {/* === Service 1 === */}
        <article className="service">
          <div className="service__head">
            <h3>Backend & API Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="fas fa-check"></i>
              <p>Designing scalable backend architectures using C# and .NET Core ecosystems.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Optimizing relational SQL schemas and complex transactional databases.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Implementing state-machines and automated financial escalation logic.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Developing robust RESTful API endpoints and third-party lookup loops.</p>
            </li>
          </ul>
        </article>

        {/* === Service 2 === */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack & Mobile Solutions</h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="fas fa-check"></i>
              <p>Building clean, responsive UI layouts with HTML5, CSS3, and modern JS.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Integrating sub-150ms client-side ML edge inference with Android applications.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Developing multi-role crowdfunding panels and permission validation layers.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Managing state-driven process engines for live data streams.</p>
            </li>
          </ul>
        </article>

        {/* === Service 3 === */}
        <article className="service">
          <div className="service__head">
            <h3>Workflow & Tools Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="fas fa-check"></i>
              <p>Coded automatic image purges and transaction cleanups.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Automated ANPR/CCTV stream captures and data ingestion paths.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Git-driven collaborative workflows and release management.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p>Crafting high-quality technical documentations and papers.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
