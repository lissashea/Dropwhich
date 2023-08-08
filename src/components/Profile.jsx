import React, { useState, useEffect } from "react";
import apiConfig from "../apiConfig/apiConfig.js";

function Profile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the authenticated user's profile information when the component mounts
    apiConfig.user
      .getProfile()
      .then((userData) => {
        setUser(userData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : user ? (
        <div>
          <p>Name: {user.username}</p>
          <p>Street: {user.street}</p>
          <p>City: {user.city}</p>
          <p>Zip Code: {user.zipCode}</p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>Allergies: {user.allergies ? user.allergies.join(", ") : "None"}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default Profile;
