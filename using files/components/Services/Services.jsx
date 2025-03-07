import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Services.css';

const ServicesPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Go Back" button click
  const handleGoBack = () => {
    navigate(-1); // Go back one page in history
  };

  return (
    <div className="services-page">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>

      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        {/* Services for Farmers */}
        <div className="service-category">
          <h2>For Farmers</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Market Access</h3>
              <p>Connect directly with buyers and sell your produce at the best prices.</p>
            </div>
            <div className="service-item">
              <h3>Crop Advisory</h3>
              <p>Get expert advice on crop selection, pest control, and soil health.</p>
            </div>
            <div className="service-item">
              <h3>Weather Updates</h3>
              <p>Real-time weather forecasts to plan your farming activities.</p>
            </div>
            <div className="service-item">
              <h3>Financial Services</h3>
              <p>Access loans, insurance, and government subsidies.</p>
            </div>
            <div className="service-item">
              <h3>Training & Workshops</h3>
              <p>Learn modern farming techniques through online and offline sessions.</p>
            </div>
            <div className="service-item">
              <h3>Equipment Rental</h3>
              <p>Affordable rental services for farming equipment.</p>
            </div>
          </div>
        </div>

        {/* Services for Vendors */}
        <div className="service-category">
          <h2>For Vendors</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Quality Produce Supply</h3>
              <p>Access fresh and high-quality produce directly from farmers.</p>
            </div>
            <div className="service-item">
              <h3>Bulk Purchasing</h3>
              <p>Get discounts and deals for bulk purchases.</p>
            </div>
            <div className="service-item">
              <h3>Logistics Support</h3>
              <p>Efficient transportation and delivery services.</p>
            </div>
            <div className="service-item">
              <h3>Market Insights</h3>
              <p>Data and trends on crop availability and pricing.</p>
            </div>
            <div className="service-item">
              <h3>Digital Marketplace</h3>
              <p>Connect with farmers and buyers on our online platform.</p>
            </div>
            <div className="service-item">
              <h3>Payment Solutions</h3>
              <p>Secure and hassle-free payment options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;