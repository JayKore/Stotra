import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage(`Password reset instructions have been sent to ${email}`);
      setEmail('');
    } catch (error) {
      setMessage('Failed to send reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <p>Enter your email address to reset your password</p>
        
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" disabled={isLoading} className="submit-button">
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
          
          {message && <div className="message">{message}</div>}
        </form>

        <div className="links">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;