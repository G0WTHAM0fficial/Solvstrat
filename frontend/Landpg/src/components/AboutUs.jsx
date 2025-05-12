import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion as Motion } from "framer-motion";

import "../styles/AboutUs.css";
import aboutImg from "../assets/about-image.png"; // Ensure the path is correct

const Counter = ({ end, suffix = "", duration = 5000, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [trigger, end, duration]);

  return <h3 className="count">{count}{suffix}</h3>;
};

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="about-us" ref={ref}>
      <div className="about-container">
        <div className="text-section">
          <h4 className="subtitle">ABOUT US</h4>
          <Motion.h2
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Why Solvstrat?
          </Motion.h2>
          <p className="description">
            We believe that businesses shouldn’t just survive; they should
            thrive. That’s why we offer a unique blend of operational expertise,
            technological prowess, and branding magic to create a holistic
            approach to growth.
          </p>
        </div>

        <div className="image-section">
          <img src={aboutImg} alt="Professional at work" />
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <Counter end={100} suffix="+" trigger={inView} />
          <p>Business</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <Counter end={50} suffix="+" trigger={inView} />
          <p>Happy Clients</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <Counter end={70} suffix="+" trigger={inView} />
          <p>Global Partners</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <Counter end={100} suffix="%" trigger={inView} />
          <p>Digital Transformation</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
