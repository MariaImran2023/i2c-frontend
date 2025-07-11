import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Other</a>
        </div>

        <button className="footer-btn" aria-label="Contact us">Contact us</button>
      </div>
      <p className="copyright">
        Copyright © 2024 i2c inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
