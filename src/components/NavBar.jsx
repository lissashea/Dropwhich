// components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navContainer">
      <Link to="/" className="navLink home">Home</Link>
      <Link to="/menu" className="navLink">Menu</Link>
      <Link to="/order" className="navLink">Order Form</Link>
      <Link to="/faq" className="navLink">FAQ</Link>
      <Link to="/reviews" className="navLink">Reviews</Link>
    </div>
  );
}

export default NavBar;
