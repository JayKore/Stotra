import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login Data:', loginData);
  };

  return (
    <div className="login-page-container">
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

      <div className="login-card">
        <div className={`photo-section ${isFarmer ? 'farmer-photo' : 'vendor-photo'}`}>
          <h2>Welcome {isFarmer ? 'Farmer' : 'Vendor'}!</h2>
        </div>
        
        <form onSubmit={handleLogin} className="form-section">
          <h3>{isFarmer ? 'Farmer' : 'Vendor'} Login</h3>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              required
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/signup">New user? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;