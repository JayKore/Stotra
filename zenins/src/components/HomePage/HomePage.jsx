import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  // Virtual data for categories and recommendations
  const categories = [
    { id: 1, name: "Dairy", description: "Vegetable" },
    { id: 2, name: "Grains", description: "Meat" },
  ];

  const recommendations = [
    { id: 1, name: "Fresh Milk", price: "$100" },
    { id: 2, name: "Organic Eggs", price: "$100" },
    { id: 3, name: "Whole Wheat Bread", price: "$100" },
  ];

  // Handle click on items
  const handleItemClick = (item) => {
    alert(`You clicked: ${item.name || item.description}`);
  };

  return (
    <div className="home-page">
      {/* Explore Section */}
      <section className="explore-section">
        <h1>Explore</h1>

        {/* Category Section */}
        <div className="category-section">
          <h2>Category</h2>
          <div className="category-list">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-item"
                onClick={() => handleItemClick(category)}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Recommendation Section */}
        <div className="recommendation-section">
          <h2>Daily Recommendation</h2>
          <div className="recommendation-list">
            {recommendations.map((recommendation) => (
              <div
                key={recommendation.id}
                className="recommendation-item"
                onClick={() => handleItemClick(recommendation)}
              >
                <p>{recommendation.name}</p>
                <p>{recommendation.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 My App. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;