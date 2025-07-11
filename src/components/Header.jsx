import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/i2c-logo.png" alt="Logo" />
      </div>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Navigation Menu"  
  aria-expanded={menuOpen}      
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="#">About us</a>
        <a href="#">Registration</a>
        <a href="#">Careers</a>
        <a href="#" className="contact-btn">Contact us</a>
      </nav>
    </header>
  );
};

export default Header;
