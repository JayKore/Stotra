import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LandingPage.css';
import farmerVideo from './farmer1.mp4'; // Import video file
import logo from '../../assets/logo.png'; // Import logo file

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "GET STARTED" button click
  const handleGetStarted = () => {
    navigate('/login'); // Redirect to /login
  };

  // Function to handle "Login" button click
  const handleLogin = () => {
    navigate('/login'); // Redirect to /login
  };
  const handleContactform = () => {
    navigate('/contactform'); // Redirect to /login
  };

  // Function to handle "Services" link click
  const handleServices = () => {
    navigate('/services'); // Redirect to /services
  };

  return (
    <div className="landing-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={farmerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Krushak The Mart Logo" />
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link" onClick={handleLogin}>
            Login
          </a>
          <a href="#services" className="nav-link" onClick={handleServices}>
            Services
          </a>
          <a href="#contact" className="nav-link" onClick={handleContactform}>Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>The Farmer Mart</h1>
        <p>
          Cultivating Connections, Harvesting Opportunities – Bridging Farmers and Vendors for a Thriving Marketplace! 🌱🚜🛒
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default LandingPage;