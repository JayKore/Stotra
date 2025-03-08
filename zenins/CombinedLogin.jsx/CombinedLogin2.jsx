import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
// Import Firebase functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { showMessage } from './firebaseauth.js'; // Assuming you exported this function from firebaseauth.js

const CombinedLogin = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        showMessage('Login is successful', 'signInMessage');
        localStorage.setItem('loggedInUserId', userCredential.user.uid);
        navigate('/homepage');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential') {
          showMessage('Incorrect Email or Password', 'signInMessage');
        } else {
          showMessage('Account does not Exist', 'signInMessage');
        }
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const db = getFirestore();
    createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: registerData.email,
          firstName: registerData.firstName,
          lastName: registerData.lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
          .then(() => {
            navigate('/homepage');
          })
          .catch((error) => {
            console.error("Error writing document", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          showMessage('Email Address Already Exists !!!', 'signUpMessage');
        } else {
          showMessage('Unable to create User', 'signUpMessage');
        }
      });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="login-page-container">
      <button onClick={handleGoBack} className="go-back-button">Go Back</button>
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
        <form onSubmit={isFarmer ? handleLogin : handleRegister} className="form-section">
          <h3>{isFarmer ? 'Farmer' : 'Vendor'} {isFarmer ? 'Login' : 'Register'}</h3>
          <div className="form-group">
            <input type="email" placeholder="Email" required value={isFarmer ? loginData.email : registerData.email} onChange={(e) => isFarmer ? setLoginData({...loginData, email: e.target.value}) : setRegisterData({...registerData, email: e.target.value})} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required value={isFarmer ? loginData.password : registerData.password} onChange={(e) => isFarmer ? setLoginData({...loginData, password: e.target.value}) : setRegisterData({...registerData, password: e.target.value})} />
          </div>
          {!isFarmer && (
            <>
              <div className="form-group">
                <input type="text" placeholder="First Name" required value={registerData.firstName} onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" required value={registerData.lastName} onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})} />
              </div>
            </>
          )}
          <button type="submit" className="login-button">{isFarmer ? 'Login' : 'Register'}</button>
          <div className="links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/signup">New user? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CombinedLogin;
