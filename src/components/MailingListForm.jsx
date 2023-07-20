// components/MailingListForm.js
import './MailingListForm.css';
import React, { useState } from 'react';

function MailingListForm() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/mailing-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type='email' value={email} onChange={handleChange} />
      </label>
      <button type='submit'>Subscribe</button>
    </form>
  );
}

export default MailingListForm;
