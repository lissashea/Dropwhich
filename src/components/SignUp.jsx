import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file
import apiConfig from "../apiConfig/apiConfig";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useAuth } from "../apiConfig/authContent.js"; // Import the useAuth hook

function Signup() {
  const navigate = useNavigate(); // Initialize the navigate function
  const { setToken, setCurrentUser } = useAuth(); // Use the useAuth hook to get setToken and setCurrentUser

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming signUp is a method in apiConfig.user (this needs to be confirmed)
      const response = await apiConfig.user.signUp(form);

      if (response.ok) {
        console.log("Signup successful!");

        // Set the token and current user in the context after successful signup
        // NOTE: Assuming the response has the token and user details. Adjust as needed.
        const responseData = await response.json(); // Parse the JSON response
        setToken(responseData.token); // Save the token to the context
        setCurrentUser(responseData.user); // Save the user details to the context

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
          Username:
          <input
            type="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
