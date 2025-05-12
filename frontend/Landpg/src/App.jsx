import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutUs from './components/AboutUs';
import CaseStudy from './components/CaseStudy';
import HomeIntroSection from './components/HomeIntroSection';


import CustomerJourney from "./components/CustomerJourney";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>

      {/* Set IDs here to match navbar anchors */}
     

      <section id="services">
        <HomeIntroSection/>
      </section>

      <section id="solution">
        <CustomerJourney/>
      </section>

       <section id="aboutus">
        <AboutUs/>
      </section>

      <section id="case-studies">
       <CaseStudy/>
      </section>

      <Footer />
    </>
  );
}

export default App;
