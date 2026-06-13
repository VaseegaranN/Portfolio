import React from 'react';

const achievementsData = [
  {
    id: 1,
    icon: 'fas fa-trophy',
    title: 'Smart India Hackathon Finalist',
    subtitle: 'National Level Finalist (August 2022)',
    description: 'Selected as a National Finalist for the Grand Finale held in Bengaluru, working on real-world problem statements.'
  },
  {
    id: 2,
    icon: 'fab fa-google-play',
    title: 'Published Play Store App',
    subtitle: 'Bharath Translator App',
    description: 'Architected and deployed "Bharath Translator" utility application on the Google Play Store, managing app store compliance.'
  },
  {
    id: 3,
    icon: 'fas fa-certificate',
    title: 'Foundational C# Professional',
    subtitle: 'Microsoft & freeCodeCamp (2024)',
    description: 'Earned professional certification validated by Microsoft covering C# syntax, debugging, and OOP principles.'
  },
  {
    id: 4,
    icon: 'fas fa-award',
    title: 'Fundamentals of Deep Learning',
    subtitle: 'NVIDIA Deep Learning Institute (2022)',
    description: 'Completed hands-on assessment in training and deploying deep neural networks for computer vision tasks.'
  }
];

const Testimonials = () => {
  return (
    <section id="achievements">
      <h5>Recognition & Badges</h5>
      <h2>Key Achievements</h2>

      <div className="container testimonials__container achievements__grid">
        {achievementsData.map(({ id, icon, title, subtitle, description }) => (
          <div key={id} className="testimonial">
            <div className="client__avatar" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: '#4db5ff',
              background: '#2c2c6c',
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              marginBottom: '1rem',
              border: '2px solid rgba(77,181,255,0.4)'
            }}>
              <i className={icon}></i>
            </div>
            <h5 className="client__name">{title}</h5>
            <small className="client__review" style={{ color: '#4db5ff', marginBottom: '0.5rem', display: 'block' }}>{subtitle}</small>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
