import React, { useState } from 'react';
import './ContactForm.css';
import farmerVideo from './farmer1.mp4';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscription: 'email',
    phoneNumber: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="form-container">
        {/* Background Video */}
            <video className="background-video" autoPlay loop muted playsInline>
              <source src={farmerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      
      <button className="back-button" onClick={handleGoBack}>
        ← Go Back
      </button>
      
      <h2 className="form-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="input-label">Name</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="input-label">Email</label>
        </div>

        {formData.subscription === 'phone' && (
          <div className="form-group">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label className="input-label">Phone Number</label>
          </div>
        )}

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label className="input-label">Message</label>
        </div>

        <div className="radio-group">
          <p>Preferred Contact Method:</p>
          <label className="radio-label">
            <input
              type="radio"
              name="subscription"
              value="email"
              checked={formData.subscription === 'email'}
              onChange={handleChange}
            />
            <span className="radio-custom"></span>
            Email
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="subscription"
              value="phone"
              checked={formData.subscription === 'phone'}
              onChange={handleChange}
            />
            <span className="radio-custom"></span>
            Phone
          </label>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <span className="checkbox-custom"></span>
          I agree to the terms and conditions
        </label>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;