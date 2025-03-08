// import React, { useState } from 'react';
// import FarmerLogin from './components/Login/FarmerLogin';
// import VendorLogin from './components/Login/VendorLogin';
// import './App.css';

// function App() {
//   const [isFarmer, setIsFarmer] = useState(true);

//   const farmerColors = ['#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9'];
//   const vendorColors = ['#2196F3', '#64B5F6', '#90CAF9', '#BBDEFB'];

//   return (
//     <div className="app-container" style={{
//       background: `linear-gradient(-45deg, ${isFarmer ? farmerColors : vendorColors})`,
//       backgroundSize: '400% 400%'
//     }}>
//       <div className="toggle-container">
//         <span className={`toggle-label ${isFarmer ? 'active' : ''}`}>Farmer</span>
//         <label className="toggle-switch">
//           <input 
//             type="checkbox" 
//             checked={!isFarmer}
//             onChange={() => setIsFarmer(!isFarmer)}
//           />
//           <span className="slider round"></span>
//         </label>
//         <span className={`toggle-label ${!isFarmer ? 'active' : ''}`}>Vendor</span>
//       </div>
      
//       {isFarmer ? <FarmerLogin /> : <VendorLogin />}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignupPage';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LandingPage from './components/LandingPage/LandingPage';
import '../src/components/LandingPage/LandingPage.css';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import CombinedLogin from './components/Login/CombinedLogin';
// import '../src/components/LandingPage/'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/combinedlogin" element={<CombinedLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
