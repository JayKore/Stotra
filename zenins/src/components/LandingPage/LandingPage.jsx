import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import farmerVideo from './farmer1.mp4';
import logo from '../../assets/logo.png';

const LandingPage = () => {
  const navigate = useNavigate();
  const [servicesHovered, setServicesHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  const handleGetStarted = () => navigate('/login');
  const handleLogin = () => navigate('/login');
  const handleContactform = () => navigate('/contactform');
  const handleServices = () => navigate('/services');

  const companyInfo = {
    services: [
      "Farmer Direct Marketplace",
      "Vendor Network Integration",
      "Crop Advisory Services",
      "Supply Chain Management",
      "Real-time Pricing Analytics"
    ],
    contact: {
      email: "support@krushakmart.com",
      phone: "+91 98765 43210",
      address: "123 Agri Tower, Farmland District, India 560001"
    }
  };

  return (
    <div className="landing-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={farmerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="background-overlay"></div>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Krushak The Mart Logo" />
        </div>
        <div className="nav-links">
          <div 
            className="nav-item"
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <a href="#services" className="nav-link" onClick={handleServices}>
              Services
            </a>
            {servicesHovered && (
              <div className="dropdown-content">
                <h4>Our Services</h4>
                <ul>
                  {companyInfo.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div 
            className="nav-item"
            onMouseEnter={() => setContactHovered(true)}
            onMouseLeave={() => setContactHovered(false)}
          >
            <a href="#contact" className="nav-link" onClick={handleContactform}>
              Contact
            </a>
            {contactHovered && (
              <div className="dropdown-content">
                <h4>Contact Information</h4>
                <p>📧 {companyInfo.contact.email}</p>
                <p>📞 {companyInfo.contact.phone}</p>
                <p>🏢 {companyInfo.contact.address}</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="main-content">
        <h1 className='mode'> Krushak </h1>
        <h1>The Farmer Mart</h1>
        <p>
          Cultivating Connections, Harvesting Opportunities – Bridging Farmers and Vendors for a Thriving Marketplace!
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default LandingPage;