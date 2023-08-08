const BASE_URL = 'http://localhost:4000/api'; // Replace this with your backend URL
const apiConfig = {
  user: {
    signUp: (userData) => fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }), // POST request for user sign-up
    getAuthenticatedUser: async () => {
      try {
        // Perform an API call to fetch the authenticated user's information
        const response = await fetch(`${BASE_URL}/user`);
        const data = await response.json();
        console.log(data); // Check the response data in the console
        return data;
      } catch (error) {
        console.error("Error occurred during API call:", error);
        throw error;
      }
    },    
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
    getProfile: async () => {
      // Perform an API call to fetch the authenticated user's profile information
      // For example, if you are using fetch:
      const response = await fetch(`${BASE_URL}/profile`); // Replace "/profile" with the appropriate API endpoint for fetching user profiles
      const data = await response.json();
      return data;
    },
    // ... other user functions ...
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
