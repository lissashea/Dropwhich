import "./SignOut.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../apiConfig/authContent.js";

function SignOut() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    // Redirect the user to the home or login page after signing out
    navigate("/signin"); // Adjust this to your desired route
  };

  // If you want to sign out automatically when the component is mounted:
  useEffect(() => {
    handleSignOut();
  }, []);

  return (
    <div className="signout-container">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
