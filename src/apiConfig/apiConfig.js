import axios from "axios";

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
      const { data } = await axios.post(
        `${BASE_URL}/users/signin`,
        credentials
      );
      return data; // Let the caller handle side effects like saving to local storage
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
    getAllOrders: async () => {
      const { data } = await axios.get(`${BASE_URL}/orders`);
      return data;
    },

    createOrder: async (orderData, userToken, userId) => {
      // Debug: Print out the URL and order data before making the API call
      console.log("Constructed URL:", `${BASE_URL}/orders/${userId}`);
      console.log("Order Data:", orderData);

      const { data } = await axios.post(
        `${BASE_URL}/orders/${userId}`,
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`, // Assuming JWT is used
          },
        }
      );
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
