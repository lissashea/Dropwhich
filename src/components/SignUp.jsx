import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file
import apiConfig from "../apiConfig/apiConfig";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Signup() {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the signup API call
      const response = await apiConfig.user.signUp(formData);
      if (response.ok) {
        // Handle successful signup, redirect to profile page
        console.log("Signup successful!");
        navigate("/profile"); // Use navigate to redirect to the profile page
      } else {
        // Handle signup failure
        console.error("Signup failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during signup:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
