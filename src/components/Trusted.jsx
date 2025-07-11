import React, { useState } from "react";
import "./Trusted.css";

const logos = [
  {
    id: 1,
    name: "Microsoft",
    lightSrc: "microsoft-light.png",
    darkSrc: "microsoft-light.png",
    className: "microsoft-logo"
  },
  {
    id: 2,
    name: "Twitter",
    lightSrc: "twitter-light.png",
    darkSrc: "twitter-dark.png",
    className: "Twitter-logo"

  },
  {
    id: 3,
    name: "Coca Cola",
    lightSrc: "cola-light.png",
    darkSrc: "cola-dark.png",
    className: "cola-logo"

  },
];

const Trusted = () => {
  const [currentIndex, setCurrentIndex] = useState(1); 

  const prevLogo = () => {
    setCurrentIndex((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  };

  const nextLogo = () => {
    setCurrentIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
  };

  // Determine which logos to display (previous, current, next)
  const getVisibleLogos = () => {
    const prevIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === logos.length - 1 ? 0 : currentIndex + 1;
    
    return [
      { ...logos[prevIndex], position: "left" },
      { ...logos[currentIndex], position: "center" },
      { ...logos[nextIndex], position: "right" },
    ];
  };

  const visibleLogos = getVisibleLogos();

  return (
    <section className="trusted-section">
      <div className="trusted-title-container">
        <h2 className="trusted-title">Trusted by</h2>
        <img src="/underline2.png" alt=""  className="underline-img" />
      </div>

      <p className="trusted-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Vitae, in tristique senectus dui pharetra sit.
      </p>

      <div className="trusted-slider-container">
        <div className="trusted-slider">
          <button className="arrow left" onClick={prevLogo} aria-label="Previous logo">
            ❮
          </button>

          <div className="logos-container">
            {visibleLogos.map((logo) => (
              <div
                key={`${logo.id}-${logo.position}`}
                className={`logo-item ${logo.position} ${logo.className}`}
              >

                <img
                  src={logo.position === "center" ? logo.darkSrc : logo.lightSrc}
                  alt={logo.name}
                  className={`logo-img ${
                    logo.position === "center" ? "active" : ""
                  }`}
                />
                
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={nextLogo} aria-label="Next logo">
            ❯
          </button>
        </div>
        
      </div>
      <div className="t-orange-gradient"></div>
        <div className="t-orange-gradient2"></div>
        <div className="t-pink-gradient"></div>
        <div className="t-blue-gradient"></div>
        <div className="t-blue-gradient2"></div>
    </section>
  );
};

export default Trusted;