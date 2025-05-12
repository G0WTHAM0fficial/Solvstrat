import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="Logo" className="footer-logo" />
            <h2 className="footer-title">SOLVSTRAT</h2>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <a href="#about">About.</a>
            <a href="#solutions">Solutions</a>
            <a href="#service">Service.</a>
            <a href="#contact">Contact.</a>
          </div>
        </div>

        {/* Contact & Location Section */}
        <div className="footer-info">
          <div className="footer-column">
            <p className="footer-heading">Contact Us</p>
            <p>+91 98840 98840</p>
            <p>info@solvstrat.com</p>

            <p className="footer-heading" style={{ marginTop: '20px' }}>Location</p>
            <p>Chennai,</p>
            <p>INDIA</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-strip"></div>
    </footer>
  );
};

export default Footer;
