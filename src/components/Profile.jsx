import React, { useState, useEffect } from "react";
import apiConfig from "../apiConfig/apiConfig.js";
import "./Profile.css";
import { useAuth } from "../apiConfig/authContent.js";

function Profile() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    street: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    allergies: [],
  });
  useEffect(() => {
    if (currentUser) {
        setUser(currentUser);
        setFormData(prevData => ({
            ...prevData,
            username: currentUser.username || "",
            name: currentUser.name || "",
            street: currentUser.street || "",
            city: currentUser.city || "",
            zipCode: currentUser.zipCode || "",
            phone: currentUser.phone || "",
            email: currentUser.email || "",
            allergies: currentUser.allergies || []
        }));
        setIsLoading(false);
    } else {
        setIsLoading(false);
    }
}, [currentUser]);

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        profile: formData,
      };

      const updatedUser = await apiConfig.user.updateUser(
        user._id,
        updatedData
      );
      console.log("Updated user data:", updatedUser);

      setUser(updatedUser); // Update user at App level
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : user ? (
        <div>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <p>
                Name:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                Street:
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                Zip Code:
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                Allergies (comma-separated):
                <input
                  type="text"
                  name="allergies"
                  value={
                    Array.isArray(formData.allergies)
                      ? formData.allergies.join(", ")
                      : ""
                  }
                  onChange={handleInputChange}
                />
              </p>

              <div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleEditModeToggle}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <p>Name: {user && user.username}</p>
              <p>Street: {user.street}</p>
              <p>City: {user.city}</p>
              <p>Zip Code: {user.zipCode}</p>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <p>
                Allergies (comma-separated):{" "}
                {user.allergies ? user.allergies.join(", ") : ""}
              </p>
              <button type="button" onClick={handleEditModeToggle}>
                Edit Profile
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default Profile;
