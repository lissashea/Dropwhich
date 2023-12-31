// components/Menu.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

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
        id: 3,
        name: "Placeholder Side 1",
        description: "This is a placeholder side.",
        price: 4.99,
      },
    ];

    setItems(placeholderItems);
  }, []);

  const goToOrderForm = () => {
    navigate("/order");
  };

  return (
    <>
      {/* <h1>Menu</h1> */}
      <div className="menu-container">
        <div className="menu-content">
          <div className="menu-item">
            <h2>
              <span className="underline">Sandwich</span>
            </h2>
            {items
              .filter((item) => item.id === 1) // Filter out the desired sandwich item (ID 1)
              .map((item) => (
                <div key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>
          <div className="menu-item">
            <h2>
              <span className="underline">Side</span>
            </h2>
            {items
              .filter((item) => item.id === 3) // Filter out the desired side item (ID 3)
              .map((item) => (
                <div key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price.toFixed(2)}</p>{" "}
                </div>
              ))}
          </div>
        </div>
        <p className="availability-text">
          Available until {new Date().toLocaleDateString()}
        </p>
        <button onClick={goToOrderForm} className="order-button">
          Order Here
        </button>
        {/* <div className="menu-image"> */}
          {/* <img
          src={sandwichImage}
          alt="Delicious Sandwich"
          style={{ width: "100px", height: "auto" }}
        /> */}
        </div>
    </>
  );
}

export default Menu;
