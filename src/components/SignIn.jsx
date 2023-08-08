import React, { useState } from "react";
import "./SignIn.css"; // Import the CSS file
import apiConfig from "../apiConfig/apiConfig"; // Import your API configuration

function SignIn() {
  const [formData, setFormData] = useState({
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
      const response = await apiConfig.user.signIn({
        email: formData.email,
        password: formData.password,
      });

      if (response.ok) {
        // Handle successful login, e.g., store token and redirect
        console.log("Login successful!");
      } else {
        // Handle login failure
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during login:", error.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
