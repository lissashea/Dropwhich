import React from "react";
import "./ImageGrid.css"; // Import the CSS file


import image1 from "../styling/image1.png";
import image2 from "../styling/image2.png";
import image3 from "../styling/image3.png";
import image4 from "../styling/image4.png";
import image5 from "../styling/image5.png";
import image6 from "../styling/image6.png";
import image7 from "../styling/image7.png";
import image8 from "../styling/image8.png";
import image9 from "../styling/image9.png";
import image10 from "../styling/image10.png";
import image11 from "../styling/image11.png";
import image12 from "../styling/image12.png";
import image13 from "../styling/image13.png";
import image14 from "../styling/image14.png";
import image15 from "../styling/image15.png";
import image16 from "../styling/image16.png";
import image17 from "../styling/image17.png";
import image18 from "../styling/image18.png";
import image19 from "../styling/image19.png";
import image20 from "../styling/image20.png";
import image21 from "../styling/image21.png";
import image22 from "../styling/image22.png";
import image23 from "../styling/image23.png";
import image24 from "../styling/image24.png";
import image25 from "../styling/image25.png";
import image26 from "../styling/image26.png";
import image27 from "../styling/image27.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11
]


const ImageGrid = () => {
  return (
    <div className="image-grid-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Display ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;