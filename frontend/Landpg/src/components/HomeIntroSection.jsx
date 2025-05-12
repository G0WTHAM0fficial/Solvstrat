import React from "react";
import "../styles/HomeIntroSection.css";
import centerImage from "../assets/center-image.png";
import CustomerJourney from "./CustomerJourney";
import AboutUs from "./AboutUs";
import CaseStudy from "./CaseStudy";

const HomeIntroSection = () => {
  return (
    <>
      {/* Hero Intro Text and Button */}
  <section className="homeintro-hero">
  <p className="homeintro-text">
    We blend human insight with intelligent technology to help businesses<br />
    scale smarter and innovate faster. We deliver tailored solutions that<br />
    turn vision into velocity.
  </p>
  <button className="homeintro-learn-more">
    Learn More <span className="homeintro-arrow">↗</span>
  </button>
</section>

<div className="curve-wrapper">
  <svg
    viewBox="0 0 2048 599"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
  >
    <path
      d="M0 570 
         C 400 100, 900 700, 1350 400 
         S 1800 100, 2048 50"
      fill="transparent"
      stroke="rgb(112, 143, 238)"
      strokeWidth="40"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

<div className="bgedit">
  {/* Solutions Section */}
  <section className="homeintro-solutions">
    <div className="homeintro-header">
      <p className="homeintro-subtitle">OUR SOLUTIONS</p>
      <h2 className="homeintro-title">
        Engineering Success Through Integrated Solutions
      </h2>
    </div>

    <div className="homeintro-content">
      <div className="homeintro-card left">
        <div className="text-container">
          <h3>Built for Speed, Backed by Insight</h3>
          <div className="card-subtitle-row">
  <p>Technology Solutions</p>
  <button className="homeintro-arrow-btn">↗</button>
</div>

        </div>
      </div>

      <div className="homeintro-center">
  <div className="homeintro-image-card">
    <img src={centerImage} alt="Tech Visual" />
    <button className="homeintro-get-started">Get Started</button>
  </div>
</div>

      <div className="homeintro-card right">
        <div className="text-container">
          <h3>Strategy Meets Execution</h3>
          <div className="card-subtitle-row">
  <p>Branding Solutions</p>
  <button className="homeintro-arrow-btn">↗</button>
</div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  );
};

export default HomeIntroSection;
