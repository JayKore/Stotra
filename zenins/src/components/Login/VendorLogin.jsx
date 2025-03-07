import React from 'react';
import './Login.css';

const VendorLogin = () => {
  return (
    <div className="login-container">
      <div className="photo-section vendor-photo">
        <h2>Welcome Vendor!</h2>
      </div>
      
      <form className="form-section">
        <h3>Vendor Login</h3>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
        <div className="links">
          <a href="#forgot">Forgot Password?</a>
          <a href="#signup">New user? Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default VendorLogin;