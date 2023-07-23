import React, { useState } from "react";
import "./OrderForm.css";
import Countdown from "./Countdown.jsx"; // Import the Countdown component

function OrderForm() {
  const [order, setOrder] = useState({
    sandwich: "",
    side: "",
    address: "",
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const getNextTuesday = () => {
    const now = new Date();
    const daysUntilNextTuesday = 2 - now.getDay() + 7;
    const nextTuesday = new Date(now);
    nextTuesday.setDate(nextTuesday.getDate() + daysUntilNextTuesday);
    nextTuesday.setHours(12, 0, 0, 0);
    return nextTuesday;
  };

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
    }).then((response) => {
      if (response.ok) {
        setOrderSubmitted(true);
      }
    });
  };



  return (
    <div className="orderForm">
      {orderSubmitted ? (
        <div className="confirmationMessage">
          <p>Order submitted successfully!</p>
          <p>Thank you for your order.</p>
        </div>
      ) : (
        <div className="orderForm-container">
          <div className="orderForm-content">
            <form onSubmit={handleSubmit}>
              <label>
                Sandwich:
                <select
                  name="sandwich"
                  className="dropdown"
                  onChange={handleChange}
                >
                  <option>Select a sandwich</option>
                  <option value="sandwich1">Sandwich 1</option>
                  <option value="sandwich2">Sandwich 2</option>
                </select>
              </label>
  
              {/* Side selection */}
              <label>
                Side:
                <select name="side" className="dropdown" onChange={handleChange}>
                  <option>Select a side</option>
                  <option value="side1">Side 1</option>
                  <option value="side2">Side 2</option>
                </select>
              </label>
  
              {/* Name input */}
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  className="madLibInput"
                  value={order.name}
                  onChange={handleChange}
                />
              </label>
  
              {/* Phone number input */}
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phone"
                  className="madLibInput"
                  value={order.phone}
                  onChange={handleChange}
                />
              </label>
  
              {/* Address input */}
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  className="madLibInput"
                  value={order.address}
                  onChange={handleChange}
                />
              </label>
  
              {/* Delivery instructions input */}
              <label>
                Delivery Instructions:
                <input
                  name="deliveryInstructions"
                  className="madLibInput"
                  value={order.deliveryInstructions}
                  onChange={handleChange}
                />
              </label>
  
              <button type="submit" className="submitButton">
                Submit
              </button>
            </form>
          </div>
          <div className="orderForm-countdown">
            <div className="countdownContainer">
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default OrderForm;