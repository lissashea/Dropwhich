// components/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Update the CSS file import if needed
import sandwichImage from "../sandwich.png";

const Home = ({ imageSize }) => {
  return (
    <div className="homeContainer">
      <div className="textContainer">
        <h1>Welcome to Dropwich!</h1>
        <h2>Dropwich: Gourmet Workday Fuel, Delivered Fresh</h2>
        <p>
          Your workday sandwich delivery every Thursday from 12PM-3PM. New
          featured sandwich and deli side each week.
        </p>
        <div className="buttonContainer">
          <Link to="/menu" className="button">
            See This Week's Menu
          </Link>
          {/* <Link to="/signup" className="button">Sign Up</Link> */}
        </div>
        <div className="imageContainer">
          <img
            src={sandwichImage}
            alt="Delicious Sandwich"
            style={{ width: "100px", height: "auto" }}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
