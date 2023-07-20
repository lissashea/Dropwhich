// components/OrderForm.js

import React, { useState } from "react";
import "./OrderForm.css";
import Countdown from "./Countdown.jsx"; // Import the Countdown component

function OrderForm() {
  const [order, setOrder] = useState({
    sandwich: "",
    side: "",
    address: "",
  });

  const getNextTuesday = () => {
    const now = new Date();
    const daysUntilNextTuesday = 2 - now.getDay() + 7; // Calculate days until next Tuesday
    const nextTuesday = new Date(now);
    nextTuesday.setDate(nextTuesday.getDate() + daysUntilNextTuesday);
    nextTuesday.setHours(12, 0, 0, 0); // Set the time to 12 PM PST
    return nextTuesday;
  };

  // Define the target date for the countdown (Tuesday at 12 PM PST)
  const targetDate = getNextTuesday();

  const handleChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };

  return (
    <div>
      <div className="countdownContainer">
        <Countdown targetDate={targetDate} />
      </div>
      <form className="orderForm" onSubmit={handleSubmit}>
        <label>
          Sandwich:
          <select
            name="sandwich"
            value={order.sandwich}
            onChange={handleChange}
            className="madLibInput"
          >
            <option>--Select a sandwich--</option>
            <option value="sandwich1">Sandwich 1</option>
            <option value="sandwich2">Sandwich 2</option>
            {/* Add as many options as needed */}
          </select>
        </label>

        <label>
          Side:
          <select
            name="side"
            value={order.side}
            onChange={handleChange}
            className="madLibInput"
          >
            <option>--Select a side--</option>
            <option value="side1">Side 1</option>
            <option value="side2">Side 2</option>
            {/* Add as many options as needed */}
          </select>
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={order.address}
            onChange={handleChange}
            className="madLibInput"
          />
        </label>

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>

      {/* Display information about order deadline and countdown */}
      
    </div>
  );
}

export default OrderForm;
