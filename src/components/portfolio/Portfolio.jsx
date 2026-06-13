import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Plant Disease Detection',
    image: '/assets/img/work-1.jpg',
    description: 'Engineered an end-to-end computer-vision mobile application providing rapid agricultural crop diagnosis via edge neural networks.',
    tech: ['Android Studio', 'Firebase ML Kit', 'Python', 'Java'],
    category: 'off-duty',
    demo: '/portfolio-details-1.html'
  },
  {
    id: 2,
    title: 'Multi-Role Crowdfunding Platform',
    image: '/assets/img/work-2.jpg',
    description: 'Designed a secure, full-stack crowdfunding system supporting structured cross-role communications and transaction validations.',
    tech: ['PHP', 'MySQL', 'AJAX', 'HTML5/CSS3'],
    category: 'on-duty',
    demo: '/portfolio-details-2.html'
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* Tabs Filter Selector */}
      <div className="portfolio__tabs">
        <button 
          className={`portfolio__tab ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`portfolio__tab ${activeFilter === 'on-duty' ? 'active' : ''}`}
          onClick={() => setActiveFilter('on-duty')}
        >
          On Duty (Enterprise)
        </button>
        <button 
          className={`portfolio__tab ${activeFilter === 'off-duty' ? 'active' : ''}`}
          onClick={() => setActiveFilter('off-duty')}
        >
          Off Duty (Research)
        </button>
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map(({ id, title, image, description, tech, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-tech">
              {tech.map((t, idx) => (
                <span key={idx} className="portfolio__tech-tag">{t}</span>
              ))}
            </div>
            <div className="portfolio__item-cta">
              <a href={demo} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Details</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
