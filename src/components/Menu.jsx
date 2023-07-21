// components/Menu.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import sandwichImage from "../sandwich.png";

function Menu({ imagesize }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder data
    const placeholderItems = [
      {
        id: 1,
        name: "Placeholder Sandwich 1",
        description: "This is a placeholder sandwich.",
        price: 10.99,
      },
      {
        id: 2,
        name: "Placeholder Sandwich 2",
        description: "This is another placeholder sandwich.",
        price: 12.99,
      },
      {
        id: 3,
        name: "Placeholder Side 1",
        description: "This is a placeholder side.",
        price: 4.99,
      },
      {
        id: 4,
        name: "Placeholder Side 2",
        description: "This is another placeholder side.",
        price: 3.99,
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
  <h2><span className="underline">Sandwich</span></h2>
          {items
            .filter((item) => item.id <= 2) // Filter out the sandwich items
            .map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
        <div className="menu-item">
        <h2><span className="underline">Side</span></h2>
          {items
            .filter((item) => item.id > 2) // Filter out the side items
            .map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)}</p>{" "}
              </div>
            ))}
        </div>
      </div>
      <p>Available until {new Date().toLocaleDateString()}</p>
      <button onClick={goToOrderForm} className="order-button">
        Order Here
      </button>
      <div className="menu-image">
        {/* Apply the 'menu-image' class to the 'img' element */}
        {/* <img
          src={sandwichImage}
          alt="Delicious Sandwich"
          style={{ width: "100px", height: "auto" }}
        /> */}
      </div>
    </div>
  );
}

export default Menu;
