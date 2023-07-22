import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import review1 from "../review1.png";
import review2 from "../review2.png";

const Reviews = () => {
  const images = [review1, review2];

  return (
    <div className="slideshow-container">
      <Slide>
        {images.map((image, index) => (
          <div key={index} className="each-slide">
            <div style={{ backgroundImage: `url(${image})`, width: "100%", height: "600px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",marginTop: "40px" }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Reviews;
