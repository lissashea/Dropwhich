import axios from 'axios';
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
        const { data } = await axios.post(`${BASE_URL}/users/signin`, credentials);
        
        localStorage.setItem('token', data.token);

        if (data.token && data.user) {
          currentToken = data.token;
          currentUser = data.user;
          currentId = data.user._id;
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
        const { data } = await axios.get(`${BASE_URL}/users/${currentUser._id}`);
        return data;
      } catch (error) {
        throw error.response.data;
      }
    },

    getAllUsers: async () => {
      const { data } = await axios.get(`${BASE_URL}/users`);
      return data;
    },

  //   createUser: async (userData) => {
  //     const { data } = await axios.post(`${BASE_URL}/users`, userData);
  //     console.log(data);  // Log the data to check its structure
  //     return data;
  // },  
  

  getUser: async (userId) => {
    if (!userId) {
        throw new Error('UserId is undefined or not provided');
    }
    const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
    return data;
},
  

    updateUser: async (userId, userData) => {
      const { data } = await axios.put(`${BASE_URL}/users/${userId}`, userData, {
        headers: {
          "Authorization": `Bearer ${currentToken}`
        }
      });
      return data;
    },

    deleteUser: async (userId) => {
      const { data } = await axios.delete(`${BASE_URL}/users/${userId}`);
      return data;
    }
  },

  order: {
    getAllOrders: () => fetch(`${BASE_URL}/orders`),
    createOrder: (orderData) =>
      fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }),
  },
};

export const signIn = apiConfig.user.signIn;
export const getUser = apiConfig.user.getUser;
export const signOut = apiConfig.user.signOut;
export default apiConfig;

