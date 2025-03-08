import { useState } from "react";
import { Avatar } from "@mui/material";
import { FaMapMarkerAlt, FaEdit, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import "./ProfilePage.css"; // Ensure you have this CSS file for styling

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "Pratham",
    email: "Pratham88@gmail.com",
    dob: "",
    phone: "",
    address: "",
  });
  const [orders, setOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <Avatar className="profile-avatar" />
        <h2 className="profile-name">{userInfo.name}</h2>
        <p className="profile-email">{userInfo.email}</p>
        <button
          className="logout-button"
          onClick={() => (window.location.href = "/login")}
        >
          Logout
        </button>
      </div>

      {/* Menu Items */}
      <div className="menu-container">
        <button
          className="menu-item"
          onClick={() => setActiveTab(activeTab === "info" ? null : "info")}
        >
          Personal Information
        </button>
        {activeTab === "info" && (
          <div className="menu-content">
            <input
              type="text"
              name="dob"
              placeholder="Date of Birth"
              value={userInfo.dob}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        )}
        <button
          className="menu-item"
          onClick={() => setActiveTab(activeTab === "tracker" ? null : "tracker")}
        >
          Order Tracker
        </button>
        {activeTab === "tracker" && (
          <div className="menu-content">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div key={index} className="order-item">
                  Order #{order.id} - {order.status} - {order.eta} mins left
                </div>
              ))
            ) : (
              <p>No items ordered</p>
            )}
          </div>
        )}
        <button
          className="menu-item"
          onClick={() => setActiveTab(activeTab === "feedback" ? null : "feedback")}
        >
          Order Feedback
        </button>
        {activeTab === "feedback" && (
          <div className="menu-content">
            {pastOrders.length > 0 ? (
              pastOrders.map((order, index) => (
                <div key={index} className="order-item">
                  <p>Order #{order.id} - {order.vendor}</p>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Rate (1-5)"
                    className="input-field"
                  />
                </div>
              ))
            ) : (
              <p>No past orders</p>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <FaMapMarkerAlt className="nav-icon" />
        <FaEdit className="nav-icon" />
        <FaHome className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
        <FaUser className="nav-icon" />
      </div>
    </div>
  );
}