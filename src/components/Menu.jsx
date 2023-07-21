 // components/Menu.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import sandwichImage from '../sandwich.png';

function Menu({ imagesize }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder data
    const placeholderItems = [
      {
        id: 1,
        name: "Placeholder Item 1",
        description: "This is a placeholder item.",
        price: 10.99,
      },
      {
        id: 2,
        name: "Placeholder Item 2",
        description: "This is another placeholder item.",
        price: 12.99,
      },
    ];

    setItems(placeholderItems);
  }, []);

  const goToOrderForm = () => {
    navigate("/order");
  };
  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="menu-content">
        <div className="menu-item">
          <h2>This Week's Sandwich:</h2>
          {items.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="menu-item">
          <h2>This Week's Side:</h2>
          {/* Add your side item information here */}
        </div>
      </div>
      <p>Available until {new Date().toLocaleDateString()}</p>
      <button onClick={goToOrderForm} className="order-button">
        Order Here
      </button>
      <div className="menu-image">
        {/* Apply the 'menu-image' class to the 'img' element */}
        <img
          src={sandwichImage}
          alt="Delicious Sandwich"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Menu;