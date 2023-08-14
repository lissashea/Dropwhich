import React, { useState, useEffect } from "react";
import apiConfig from "../apiConfig/apiConfig.js";
import "./Profile.css";
import { useAuth } from "../apiConfig/authContent.js";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (currentUser) {
      const {
        username = "",
        name = "",
        street = "",
        city = "",
        zipCode = "",
        phone = "",
        email = "",
        allergies = [],
      } = currentUser;

      setFormData({
        username,
        name,
        street,
        city,
        zipCode,
        phone,
        email,
        allergies,
      });
    } else {
      navigate("/signin"); // Redirect to sign-in page if user is not authenticated
    }
  }, [currentUser, navigate]);

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
        currentUser._id,
        updatedData
      );
      console.log("Updated user data:", updatedUser);

      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-container">
    <h2>Profile</h2>
    {currentUser ? (
      <div>
        {editMode ? (
            <form onSubmit={handleSubmit}>
              <p>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
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
            <p>Name: {currentUser.username}</p>
            <p>Street: {currentUser.street}</p>
            <p>City: {currentUser.city}</p>
            <p>Zip Code: {currentUser.zipCode}</p>
            <p>Phone: {currentUser.phone}</p>
            <p>Email: {currentUser.email}</p>
            <p>
              Allergies (comma-separated):{" "}
              {currentUser.allergies ? currentUser.allergies.join(", ") : ""}
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
