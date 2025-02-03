/* eslint-disable no-unused-vars */
import React from "react";
import '../Styles/HeroSection.css'; // We will style it in a separate CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Website!</h1>
        <p className="hero-subtitle">We provide the best solutions for your business needs.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
