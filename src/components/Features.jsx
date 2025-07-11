import React from 'react';
import './Features.css';

const features = [
  {
    icon: '/lock.png',
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: '/chart.png',
    title: '1000+ of reviews',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: '/trophy.png',
    title: 'And more!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const FeatureHighlights = () => {
  return (
    <section className="feature-section">
      <div className="feature-card">
        {features.map((item, index) => (
          <div className="feature" key={index}>
            <div className="icon-container">
                <div className="icon-gradient"></div>
                <img src={item.icon} alt="" className="feature-icon" />
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
