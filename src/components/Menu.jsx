import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css"

function Menu() {
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
      <p>This week's menu is...</p>
      <p>Available until {new Date().toLocaleDateString()}</p>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <button onClick={goToOrderForm} className="order-button">
        Order Here
      </button>
    </div>
  );
}

export default Menu;
