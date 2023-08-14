import React, { useEffect } from "react";
import "./SignOut.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../apiConfig/authContent.js";

function SignOut() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
    navigate("/"); // Redirects user to homepage
  }, [signOut, navigate]);

  return (
    <div className="signout-container">
      <p>Signing you out...</p>
    </div>
  );
}

export default SignOut;
