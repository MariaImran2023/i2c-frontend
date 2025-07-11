import React from 'react';
import './Hero.css';

const testimonials = [
  {
    name: 'Andrew Schultz',
    image: '/profile3.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
  },
  {
    name: 'Andrew Schultz',
    image: '/profile1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
  },
  {
    name: 'Andrew Schultz',
    image: '/profile2.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
        Lorem ipsum <span className="blue-text-container">
                <span className="blue-text">dolor</span>
                <img src="/underline.png" alt="" className="underline-img" />
            </span> sit amet yo <span className="wave">👋</span>
        </h1>

        <div className="testimonial-wrapper">
            {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                <img src={t.image} alt={t.name} className="profile-img" />
                <div>
                    <h4>{t.name}</h4>
                    <p>{t.text}</p>
                </div>
                </div>
            ))}
            <div className="testimonial-gradient-bg"></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src="/right-img1.png" alt="Hero" className="hero-img" />

          <div className="dot dot-blue1"></div>
          <div className="dot dot-blue2"></div>
          <div className="dot dot-blue3"></div>
          <div className="dot dot-orange1"></div>
          <div className="dot dot-orange2"></div>
          <div className="dot dot-lightblue"></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-purple"></div>
          
        </div>
        
      </div>
<div className="gradient-circle blue-gradient"></div>
          <div className="gradient-circle orange-gradient"></div>
          <div className="gradient-circle orange-gradient2"></div>
          <div className="gradient-circle pink-gradient"></div>
          <div className="gradient-circle blue-gradient"></div>
          <div className="gradient-circle blue-gradient2"></div>
      
    </section>
  );
};

export default Hero;
