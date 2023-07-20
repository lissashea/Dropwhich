import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navContainer">
      <Link to="/" className="navLink">Home</Link>
      <Link to="/menu" className="navLink">Menu</Link>
      <Link to="/mailingList" className="navLink">Join Mailing List</Link>
      <Link to="/faq" className="navLink">FAQ</Link>
    </div>
  );
}

export default NavBar;