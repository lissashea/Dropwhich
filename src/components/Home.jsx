import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import sandwichImage from '../sandwich.png';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="textContainer">
        <h1>Welcome to Dropwich!</h1>
        <img src={sandwichImage} alt="Delicious Sandwich" />
        <div className="buttonContainer">
        <Link to="/menu" className="button">See This Week's Menu</Link>
        {/* <Link to="/signup" className="button">Sign Up</Link> */}
      </div>
        <h2>Dropwich: Gourmet Workday Fuel, Delivered Fresh</h2>
        <p>Your workday sandwich delivery every Thursday from 12PM-3PM. New featured sandwich and deli side each week.</p>
      </div>
    </div>
  );
}

export default Home;
