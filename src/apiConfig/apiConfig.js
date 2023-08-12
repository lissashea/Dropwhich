import axios from "axios";
import jwtDecode from "jwt-decode";
const BASE_URL = "http://localhost:4000/api"; // Replace this with your backend URL

let currentUser = null;
let currentToken = null;
let currentId = null;

const apiConfig = {
  user: {
    signUp: async (userData) => {
      try {
        const { data } = await axios.post(`${BASE_URL}/users/signup`, userData);
        return data;
      } catch (error) {
        throw error.response.data;
      }
    },
    signIn: async (credentials) => {
      try {
        const { data } = await axios.post(
          `${BASE_URL}/users/signin`,
          credentials
        );

        localStorage.setItem("token", data.token);

        if (data.token && data.user) {
          currentToken = data.token;
          currentUser = data.user;
          currentId = data.user._id;

          const decodedToken = jwtDecode(data.token);
          const userId = decodedToken.userId; // Adjust based on your token's structure

          if (userId) {
            const user = await apiConfig.user.getUser(userId);
            currentUser = user; // Update the currentUser
          } else {
            console.error("UserId not found in token");
          }
        }

        return data;
      } catch (error) {
        throw error.response.data;
      }
    },

    signOut: async () => {
      localStorage.removeItem("token");
      currentUser = null;
      currentToken = null;
      currentId = null;
    },

    getCurrentUser: () => currentUser,
    getToken: () => currentToken,
    getId: () => currentId,

    getAuthenticatedUser: async () => {
      if (!currentUser || !currentUser._id) {
        throw new Error("User not authenticated");
      }

      try {
        const { data } = await axios.get(
          `${BASE_URL}/users/${currentUser._id}`
        );
        return data;
      } catch (error) {
        throw error.response.data;
      }
    },

    getAllUsers: async () => {
      const { data } = await axios.get(`${BASE_URL}/users`);
      return data;
    },

    getUser: async (userId) => {
      if (!userId) {
        throw new Error("UserId is undefined or not provided");
      }
      const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
      return data;
    },

    getUserByToken: async (token) => {
      const response = await fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },

    updateUser: async (userId, userData) => {
      const { data } = await axios.put(
        `${BASE_URL}/users/${userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );
      return data;
    },

    deleteUser: async (userId) => {
      const { data } = await axios.delete(`${BASE_URL}/users/${userId}`);
      return data;
    },
  },

  order: {
    getAllOrders: () => fetch(`${BASE_URL}/orders`),
    createOrder: (orderData, userToken) =>
    fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}` // Assuming JWT is used
      },
      body: JSON.stringify(orderData),
    }), 
  },
};

export const signIn = apiConfig.user.signIn;
export const signUp = apiConfig.user.signUp;
export const getUser = apiConfig.user.getUser;
export const signOut = apiConfig.user.signOut;
export default apiConfig;
