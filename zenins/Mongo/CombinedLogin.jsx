import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CombinedLogin = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginData.email, password: loginData.password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful');
        navigate('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Something went wrong.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: signupData.email,
          password: signupData.password,
          firstName: signupData.firstName,
          lastName: signupData.lastName,
          userType: isFarmer ? 'farmer' : 'vendor',
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful! Please login.');
        setIsSignup(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="login-page-container">
      <button onClick={() => navigate(-1)} className="go-back-button">Go Back</button>

      <div className="toggle-container">
        <span className={`toggle-label ${isFarmer ? 'active' : ''}`}>Farmer</span>
        <label className="switch">
          <input type="checkbox" checked={!isFarmer} onChange={() => setIsFarmer(!isFarmer)} />
          <span className="slider round"></span>
        </label>
        <span className={`toggle-label ${!isFarmer ? 'active' : ''}`}>Vendor</span>
      </div>

      <div className="login-card">
        <div className={`photo-section ${isFarmer ? 'farmer-photo' : 'vendor-photo'}`}>
          <h2>Welcome {isFarmer ? 'Farmer' : 'Vendor'}!</h2>
        </div>

        {isSignup ? (
          <form onSubmit={handleSignup} className="form-section">
            <h3>Sign Up</h3>
            <input type="text" placeholder="First Name" required value={signupData.firstName} onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })} />
            <input type="text" placeholder="Last Name" required value={signupData.lastName} onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })} />
            <input type="email" placeholder="Email" required value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
            <input type="password" placeholder="Password" required value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
            <button type="submit" className="login-button">Sign Up</button>
            <p>Already have an account? <span onClick={() => setIsSignup(false)}>Login</span></p>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="form-section">
            <h3>{isFarmer ? 'Farmer' : 'Vendor'} Login</h3>
            <input type="email" placeholder="Email" required value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            <input type="password" placeholder="Password" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <button type="submit" className="login-button">Login</button>
            <div className="links">
              <Link to="/forgot-password">Forgot Password?</Link>
              <span onClick={() => setIsSignup(true)}>New user? Sign Up</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CombinedLogin;
