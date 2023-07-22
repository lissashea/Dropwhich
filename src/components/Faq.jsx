import React from 'react';
import "./Faq.css";
import mapImageUrl from "../deliveryzone.png"; // Assuming the image is in the same directory as Faq.jsx

function Faq() {
  return (
    <div className="faq-container">
      {/* <h1>FAQ</h1> */}
      <p>Q: What is the delivery zone?</p>
      <p>A: We deliver within a 10-mile radius of the Santa Monica Pier. See the map below for our delivery area:</p>
      <img src={mapImageUrl} alt="Delivery Area Map" />
      {/* Add more FAQs as needed */}
    </div>
  );
}

export default Faq;
