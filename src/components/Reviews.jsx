import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import review1 from "../review1.png";
import review2 from "../review2.png";
import "./Reviews.css"; // Make sure to import the Reviews.css file

const Reviews = () => {
  const images = [review1, review2];

  return (
    <div className="slideshow-container">
      <Slide>
        {images.map((image, index) => (
          <div key={index} className="each-slide">
            <div style={{ backgroundImage: `url(${image})`, width: "100%", height: "600px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",marginTop: "40px" }}>
              {/* Add the text underneath the image */}
              <p className="slide-text">This is a review for Image {index + 1}</p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Reviews;
