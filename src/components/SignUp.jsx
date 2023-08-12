import React, { useState } from "react";
import "./SignUp.css";
import { signUp } from "../apiConfig/apiConfig"; // Directly import the signUp function
import { useNavigate } from "react-router-dom";
import { useAuth } from "../apiConfig/authContent.js";

function Signup() {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState(false); // For handling errors
  const [errorMsg, setErrorMsg] = useState(""); // For displaying error messages

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signUp(form); // Use the directly imported signUp function
      if (data && data.token) {
        console.log("Signup successful!");
        if (data.user && data.user._id) {
          console.log("User ID:", data.user._id);
        } else if (data.user && data.user.id) {
          console.log("User ID:", data.user.id);
        }

        // setToken(data.token);
        setCurrentUser(data.user);
        navigate("/profile");
      } else {
        setIsError(true);
        setErrorMsg(data.error || "Unknown error");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setErrorMsg("Error occurred during signup. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {isError && <p>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
