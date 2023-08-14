import React, { createContext, useContext, useState, useEffect } from "react";
import { signIn as apiSignIn } from "./apiConfig.js";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const signIn = async (credentials) => {
    const data = await apiSignIn(credentials);
    if (data && data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setCurrentUser(data.user); // Adjust as necessary based on the shape of your returned data
    }
  };

  useEffect(() => {
    if (token) {
      // Fetch user details using the token or set the currentUser directly if you store it as well.
      // For simplicity, I'm just demonstrating with the token.
      setCurrentUser({ token: token }); // This is just an example, in a real-world scenario, you would probably fetch the user's data using this token.
    }
  }, [token]);

  const contextValue = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    signIn, // This is now your context's signIn which calls apiSignIn
    signOut: () => {
        console.log("Clearing token from localStorage");
        localStorage.removeItem("token");
        console.log("Setting token state to null");
        setToken(null);
        console.log("Setting currentUser state to null");
        setCurrentUser(null);
     }
}     

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
