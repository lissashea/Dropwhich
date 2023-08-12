import React, { useState } from "react";
import "./SignIn.css";
import { signIn } from "../apiConfig/apiConfig.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../apiConfig/authContent.js";

const SignIn = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  
  const onSignIn = async (event) => {
    event.preventDefault();
    try {
      const data = await signIn(form);
      setCurrentUser(data.user);
      navigate('/profile');
    } catch (error) {
      console.error(error);
      setIsError(true);
      setErrorMsg("Incorrect username and/or password. Try again.");
    }
  };
  

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {isError && <p>{errorMsg}</p>}
      <form onSubmit={onSignIn}>
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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
