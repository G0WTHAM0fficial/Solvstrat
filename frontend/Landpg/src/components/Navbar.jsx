import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#aboutus" onClick={closeMenu}>About Us</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#solution" onClick={closeMenu}>Solution</a></li>
        <li><a href="#case-studies" onClick={closeMenu}>Case Studies</a></li>
        <li className="navbar-logo-container">
          <img src={logo} alt="Company logo" className="navbar-logo" />
        </li>
      </ul>

      <button className="get-started-nav">
        Get Started <span className="arrow">↗</span>
      </button>
    </nav>
  );
};

export default Navbar;
