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
        throw new Error(error.response?.data?.message || "Signup failed");
      }
    },

    signIn: async (credentials) => {
      const { data } = await axios.post(`${BASE_URL}/users/signin`, credentials);
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
    },

    signOut: () => {
      localStorage.removeItem("token");
      currentUser = null;
      currentToken = null;
      currentId = null;
    },

    getCurrentUser: () => currentUser,
    getToken: () => currentToken,
    getId: () => currentId,

    getAuthenticatedUser: async () => {
      const { data } = await axios.get(`${BASE_URL}/users/${currentUser._id}`);
      return data;
    },

    getAllUsers: async () => {
      const { data } = await axios.get(`${BASE_URL}/users`);
      return data;
    },

    getUser: async (userId) => {
      const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
      return data;
    },

    getUserByToken: async (token) => {
      const { data } = await axios.get(`${BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },

    updateUser: async (userId, userData) => {
      const { data } = await axios.put(`${BASE_URL}/users/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });
      return data;
    },

    deleteUser: async (userId) => {
      const { data } = await axios.delete(`${BASE_URL}/users/${userId}`);
      return data;
    },
  },

  order: {
    getAllOrders: async () => {
      const { data } = await axios.get(`${BASE_URL}/orders`);
      return data;
    },

    createOrder: async (orderData, userToken) => {
      const { data } = await axios.post(`${BASE_URL}/orders/${currentUser._id}`, orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`, // Assuming JWT is used
        },
      });
      return data;
    },
  },
};

export const signIn = apiConfig.user.signIn;
export const signUp = apiConfig.user.signUp;
export const updateUser = apiConfig.user.updateUser;
export const getUser = apiConfig.user.getUser;
export const signOut = apiConfig.user.signOut;
export const createOrder = apiConfig.order.createOrder;
export default apiConfig;
