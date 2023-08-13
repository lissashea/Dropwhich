import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from '../apiConfig/authContent.js';

const NavBar = () => {
  const { currentUser, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    // Optionally redirect to home or sign in page after signing out
  };

  return (
    <div className="navContainer">
      {
        currentUser ?
          <button onClick={handleSignOut}>Sign Out</button>
        :
          <>
            <Link to="/signin" className="navLink signin">Sign In</Link>
            <Link to="/signup" className="navLink signup">Sign Up</Link>
          </>
      }
      <Link to="/" className="navLink home">Home</Link>
      <Link to="/menu" className="navLink">Menu</Link>
      <Link to="/order" className="navLink">Order Form</Link>
      <Link to="/profile" className="navLink profile">Profile</Link>
      <Link to="/faq" className="navLink">FAQ</Link>
      <Link to="/reviews" className="navLink review">Reviews</Link>
    </div>
  );
}

export default NavBar;
