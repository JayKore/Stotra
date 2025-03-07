import React from 'react';
import './LandingPage.css';
import farmerVideo from './farmer.mp4'; // Import video file
import logo from '../../assets/logo.png'; // Import logo file


const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={farmerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Background Overlay */}
      <div className="background-overlay">
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Krushak The Mart Logo" />
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <div className="main-content">
        <h1>KRUSHAK</h1>
        <h2>The Mart</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="cta-button">GET STARTED</button>
      </div>
    </div>
  );
};

export default LandingPage;