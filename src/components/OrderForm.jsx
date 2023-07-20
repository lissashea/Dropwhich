// components/OrderForm.js

import React, { useState } from 'react';

function OrderForm() {
  const [order, setOrder] = useState({
    sandwich: '',
    side: '',
    address: '',
  });

  const handleChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sandwich:
        <select name='sandwich' value={order.sandwich} onChange={handleChange}>
          <option>--Select a sandwich--</option>
          <option value='sandwich1'>Sandwich 1</option>
          <option value='sandwich2'>Sandwich 2</option>
          {/* Add as many options as needed */}
        </select>
      </label>

      <label>
        Side:
        <select name='side' value={order.side} onChange={handleChange}>
          <option>--Select a side--</option>
          <option value='side1'>Side 1</option>
          <option value='side2'>Side 2</option>
          {/* Add as many options as needed */}
        </select>
      </label>

      <label>
        Address:
        <input
          type='text'
          name='address'
          value={order.address}
          onChange={handleChange}
        />
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default OrderForm;