import React, { useState, useEffect } from "react";
import "./OrderForm.css";
import Countdown from "./Countdown.jsx"; // Import the Countdown component
import apiConfig from "../apiConfig/apiConfig";

function OrderForm() {
  const [venmoConfirmed, setVenmoConfirmed] = useState(false);
  const [order, setOrder] = useState({
    user: "", // Store the user ID associated with the order
    sandwich: "",
    side: "",
    sideSize: "", // Add sideSize field
    total: 0, // Add total field
    deliveryInstructions: "",
  });

  const sandwichBasePrice = 15;
  const sideSmallPrice = 4.5;
  const sideLargePrice = 5;
  const gfPrice = 1;

  const [users, setUsers] = useState([]); // To store the list of users
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleVenmoConfirmation = () => {
    // This function is called when the user confirms payment via Venmo.
    setVenmoConfirmed(true);
  };

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
    const { name, value } = event.target;

    // Calculate the total based on sandwich and side selections
    let total = order.total; // Initialize with the existing total

    if (name === "sandwich") {
      total = sandwichBasePrice;
      if (value === "sandwich3") {
        total += gfPrice;
      }
    } else if (name === "side") {
      total += value === "size side" ? sideSmallPrice : sideLargePrice;
    }

    // Update the order state
    setOrder({ ...order, [name]: value, total });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiConfig.order.createOrder(order).then((response) => {
      if (response.ok) {
        setOrderSubmitted(true);
      }
    });
  };

  useEffect(() => {
    // Fetch the list of users when the component mounts
    apiConfig.user
      .getAllUsers()
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
          {venmoConfirmed ? (
            <div>
              <p>Order received! Your order is confirmed.</p>
              <p>Thank you for your payment via Venmo.</p>
              <p>Total amount: ${order.total}</p>{" "}
              {/* Add the total amount here */}
            </div>
          ) : (
            <div>
              <p>
                Order received! Please confirm your order by paying the total
                amount via Venmo to @cathgreen13.
              </p>
              <p>Total amount: ${order.total}</p>{" "}
              {/* Add the total amount here */}
              <button onClick={handleVenmoConfirmation}>
                I've paid via Venmo
              </button>
            </div>
          )}
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
                  <option value="sandwich1">Sandwich as God intended</option>
                  <option value="sandwich2">Sandwich made vegan</option>
                  <option value="sandwich3">Sandwich with GF bread</option>
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
                  <option value="size side">Small</option>
                  <option value="size side">Large</option>
                </select>
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
                  readOnly // To prevent user input on the total field
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
