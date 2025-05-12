import React from "react";
import "../styles/CaseStudy.css";
import identityImage from "../assets/cs1.jpg";
import gigImage from "../assets/cs2.jpg";
import ipaasImage from "../assets/cs3.png";

const CaseStudy = () => {
  return (
    <div className="case-study">
      {/* Featured Case Study */}
      <div className="featured-case-study">
        <div className="featured-image-container">
          <img
            src={identityImage}
            alt="Identity Management"
            className="featured-image"
          />
        </div>
        <div className="featured-content">
          <div className="featured-heading">FEATURED CASE STUDY</div>
          <h2 className="case-study-title">
            Cloud Integration For Identity Management
          </h2>
          <a href="#read-more" className="read-more">
            Read More
          </a>
        </div>
      </div>

      {/* Other Case Study Cards */}
      <div className="case-study-cards">
        <div className="card">
          <div className="card-text">
            <p>Accounting Application for Gigworkers</p>
          </div>
          <div className="card-image">
            <img src={gigImage} alt="Accounting App for Gigworkers" />
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <p>An IPaaS and Cloud Service Provider</p>
          </div>
          <div className="card-image">
            <img src={ipaasImage} alt="iPaaS and Cloud Service" />
          </div>
        </div>
      </div>

      {/* View All Button */}
      <button className="view-all">View all case studies</button>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <div className="cta-left">
            <h3>READY TO ENGINEER<br />YOUR SUCCESS?</h3>
          </div>
          <div className="cta-right">
            <p>
              Unlock future-ready business potential with<br />
              data-driven strategies and intelligent decision-making.
            </p>
            <button className="get-started">
              <span>Get Started</span>
              <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
