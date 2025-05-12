import React from "react";
import "../styles/HeroSection.css";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo" />
        <h3 className="leftal">We are</h3>
        <h1>SOLVSTRAT</h1>

        <div className="tag-container">
          <span className="tag">Insight Beyond</span>
          <span className="tag">Automation</span>
          <span className="tag">Data Driven</span>
        </div>

    <div className="discover">
    <h3>Discover</h3>
    <button className="discover-btn">↓</button>
    
  </div>
      </div>
    </section>
  );
};

export default HeroSection;
