import React from "react";
import "../styles/CustomerJourney.css";
import { ArrowUpRight, Search, Puzzle, Cog, BarChart } from "lucide-react";

const CustomerJourney = () => {
  return (
    
    <section className="customer-journey">
      <h4 className="subtitle-cj">CUSTOMER JOURNEY</h4>
      <h2 className="title-cj">Turn Challenges Into Scalable Solutions</h2>
      <div className="journey-stages">
        <div className="stage-card">
          <Search size={28} className="icon" />
          <span className="stage-label">STAGE 1</span>
          <h3>Assess & Align</h3>
        </div>

        <div className="stage-card">
          <Puzzle size={28} className="icon" />
          <span className="stage-label">STAGE 2</span>
          <p>
            We build a clear roadmap tailored to your goals, combining strategy,
            systems, and structure.
          </p>
        </div>

        <div className="stage-card">
          <Cog size={28} className="icon" />
          <span className="stage-label">STAGE 3</span>
          <h3>Implement & Execute</h3>
        </div>

        <div className="stage-card">
          <BarChart size={28} className="icon" />
          <span className="stage-label">STAGE 4</span>
          <h3>Optimize & Evolve</h3>
        </div>
      </div>

      <button className="learn-more">
        Learn More <ArrowUpRight size={16} />
      </button>
    </section>
  );
};

export default CustomerJourney;
