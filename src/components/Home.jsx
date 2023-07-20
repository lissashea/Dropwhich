import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to Dropwich!</h1>
      <p>Your workday sandwich delivery every Thursday from 12PM-3PM. New featured sandwich and deli side each week.</p>
      <div className="buttonContainer">
        <Link to="/menu" className="button">See This Week's Menu</Link>
        <Link to="/mailingList" className="button">Join Our Mailing List</Link>
      </div>
    </div>
  );
}

export default Home;
