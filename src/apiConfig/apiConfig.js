// api-config.js

const BASE_URL = 'http://localhost:4000/api'; // Replace this with your backend URL

const apiConfig = {
  user: {
    getAllUsers: () => fetch(`${BASE_URL}/users`), // GET request for getting all users
    createUser: (userData) => fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }), // POST request for creating a new user
    getUser: (userId) => fetch(`${BASE_URL}/users/${userId}`), // GET request for getting a single user by ID
    updateUser: (userId, userData) => fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }), // PUT request for updating a user by ID
    deleteUser: (userId) => fetch(`${BASE_URL}/users/${userId}`, {
      method: 'DELETE',
    }), // DELETE request for deleting a user by ID
  },
  order: {
    getAllOrders: () => fetch(`${BASE_URL}/orders`), // GET request for getting all orders
    createOrder: (orderData) => fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    }), // POST request for creating a new order
  },
};

export default apiConfig;
