import React from 'react';
import "./Faq.css";

const mapImageUrl = require('../Screenshot 2023-07-20 at 4.03.06 PM.png');

function Faq() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Q: What is the delivery zone?</p>
      <p>A: We deliver within a 10 mile radius of the Santa Monica Pier. See the map below for our delivery area:</p>
      <img src={mapImageUrl} alt="Delivery Area Map" />
      {/* Add more FAQs as needed */}
    </div>
  );
}

export default Faq;
