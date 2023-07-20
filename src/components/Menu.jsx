import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Menu() {
  const [items, setItems] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const goToOrderForm = () => {
    history.push("/order");
  }

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <p>This week's menu is...</p>
      <p>Available until {new Date().toLocaleDateString()}</p>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <button onClick={goToOrderForm} className="order-button">Order Here</button>
    </div>
  );
}

export default Menu;
