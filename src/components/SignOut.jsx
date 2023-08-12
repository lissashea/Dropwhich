import React, { useEffect, useCallback } from "react";
import "./SignOut.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../apiConfig/authContent.js";

function SignOut() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
    navigate('/');  // Assuming you want to redirect to the home page after signing out
  }, [signOut, navigate]);

  useEffect(() => {
    handleSignOut();
  }, [handleSignOut]);

  return (
    <div className="signout-container">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
