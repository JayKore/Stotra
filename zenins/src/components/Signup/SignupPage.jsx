import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import './Signup.css';

const SignupPage = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // Step 1: Initialize useNavigate

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signup Data:', signupData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleGoBack = () => {
    navigate(-1); // Step 2: Function to go back to the previous page
  };

  return (
    <div className={`signup-container ${isFarmer ? 'farmer' : 'vendor'}`}>
      {/* Go Back Button */}
      <button onClick={handleGoBack} className="go-back-button">
        Go Back
      </button>

      {/* Toggle Switch */}
      <div className="toggle-container">
        <span className={`toggle-label ${isFarmer ? 'active' : ''}`}>Farmer</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={!isFarmer}
            onChange={() => setIsFarmer(!isFarmer)}
          />
          <span className="slider round"></span>
        </label>
        <span className={`toggle-label ${!isFarmer ? 'active' : ''}`}>Vendor</span>
      </div>

      {/* Signup Card */}
      <div className="signup-card">
        <h2 className="signup-title">Sign Up as {isFarmer ? 'Farmer' : 'Vendor'}</h2>
        
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={signupData.name}
              onChange={(e) => setSignupData({...signupData, name: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              required
              value={signupData.email}
              onChange={(e) => setSignupData({...signupData, email: e.target.value})}
            />
          </div>
          
          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={signupData.password}
              onChange={(e) => setSignupData({...signupData, password: e.target.value})}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>

          <div className="form-group password-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              value={signupData.confirmPassword}
              onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
            />
            <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <div className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;