import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Update the CSS file import if needed
import sandwichImage from "../images-drop/sandwich-transparent.png";

const Home = ({ imageSize }) => {
  return (
    <div className="backgroundContainer">
    <div className="homeContainer">
      <div className="textContainer">
        <h1>Welcome to <span>Dropwich!</span></h1>
        <h2>Gourmet Workday Fuel, Delivered Fresh</h2>
        <p>
          Your workday sandwich delivery every Thursday from 12PM-3PM. New
          featured sandwich and deli side each week.
        </p>
        <div className="buttonContainer">
          <Link to="/menu" className="menu-button">
            <span>See This Week's Menu</span>
          </Link>
        </div>
        <div className="imageContainer">
          <img
            src={sandwichImage}
            alt="Delicious Sandwich"
            style={{ width: imageSize, height: "auto" }}
          />{" "}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;