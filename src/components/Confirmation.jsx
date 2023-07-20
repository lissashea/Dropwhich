// components/Confirmation.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';


function Confirmation() {
  const location = useLocation();
  const { sandwich, side, address } = location.state;

  return (
    <div>
      <h1>Thank you for your order!</h1>
      <p>You ordered a {sandwich} with {side}.</p>
      <p>We will deliver your order to: {address}</p>
      <p>We will email you with a confirmation and an estimated delivery time.</p>
    </div>
  );
}

export default Confirmation;
