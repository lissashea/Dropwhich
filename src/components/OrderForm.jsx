import React, { useState, useEffect } from "react";
import "./OrderForm.css";
import Countdown from "./Countdown.jsx"; // Import the Countdown component
import apiConfig from "../apiConfig/apiConfig";


function OrderForm() {
  const [order, setOrder] = useState({
    user: "", // Store the user ID associated with the order
    sandwich: "",
    side: "",
    sideSize: "", // Add sideSize field
    total: 0, // Add total field
    deliveryInstructions: "",
  });


  const [users, setUsers] = useState([]); // To store the list of users

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
    apiConfig.order.createOrder(order)
      .then((response) => {
        if (response.ok) {
          setOrderSubmitted(true);
        }
      });
  };
  useEffect(() => {
    // Fetch the list of users when the component mounts
    apiConfig.user.getAllUsers()
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        if (data.length > 0) {
          // Set the user ID for the first user as the default value in the form
          setOrder((prevOrder) => ({ ...prevOrder, user: data[0]._id }));
        }
      });
  }, []); // Empty dependency array to ensure it only runs once
  
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
                User:
                <select
                  name="user"
                  className="dropdown"
                  onChange={handleChange}
                  value={order.user}
                >
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.username}
                    </option>
                  ))}
                </select>
              </label>

              {/* Sandwich selection */}
              <label>
                Sandwich:
                <select
                  name="sandwich"
                  className="dropdown"
                  onChange={handleChange}
                  value={order.sandwich}
                >
                  <option value="">Select a sandwich</option>
                  <option value="sandwich1">Sandwich 1</option>
                  <option value="sandwich2">Sandwich 2</option>
                </select>
              </label>

              {/* Side selection */}
              <label>
                Side:
                <select
                  name="side"
                  className="dropdown"
                  onChange={handleChange}
                  value={order.side}
                >
                  <option value="">Select a side</option>
                  <option value="side1">Side 1</option>
                  <option value="side2">Side 2</option>
                </select>
              </label>

              {/* Side Size input */}
              <label>
                Side Size:
                <input
                  type="text"
                  name="sideSize"
                  className="madLibInput"
                  value={order.sideSize}
                  onChange={handleChange}
                />
              </label>

              {/* Total input */}
              <label>
                Total:
                <input
                  type="number"
                  name="total"
                  className="madLibInput"
                  value={order.total}
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