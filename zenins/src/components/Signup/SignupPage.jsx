import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="signup-container">
      <div className="toggle-container">
        <span className={`toggle-label ${isFarmer ? 'active' : ''}`}>Farmer</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={!isFarmer}
            onChange={() => setIsFarmer(!isFarmer)}
          />
          <span className="slider round"></span>
        </label>
        <span className={`toggle-label ${!isFarmer ? 'active' : ''}`}>Vendor</span>
      </div>

      <div className="signup-card">
        <h2 className="signup-title">{isFarmer ? 'Farmer' : 'Vendor'} Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;