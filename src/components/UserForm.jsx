// // UserForm.js

// import React, { useState } from 'react';
// import apiConfig from './api-config';

// const UserForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     street: '',
//     city: '',
//     zipCode: '',
//     phone: '',
//     allergies: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the form data to the backend
//     apiConfig.user.createUser(formData)
//       .then(response => response.json())
//       .then(data => {
//         console.log('User created:', data);
//         // Display a success message to the user or perform any other actions
//       })
//       .catch(error => {
//         console.error('Error creating user:', error);
//         // Display an error message to the user or handle the error
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" name="username" value={formData.username} onChange={handleChange} />
//       </label>
//       <label>
//         Street:
//         <input type="text" name="street" value={formData.street} onChange={handleChange} />
//       </label>
//       <label>
//         City:
//         <input type="text" name="city" value={formData.city} onChange={handleChange} />
//       </label>
//       <label>
//         Zip Code:
//         <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
//       </label>
//       <label>
//         Phone:
//         <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
//       </label>
//       <label>
//         Allergies:
//         <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UserForm;
