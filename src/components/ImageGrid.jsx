import React from "react";
import "./ImageGrid.css"; // Import the CSS file


import image1 from "../images-drop/image1.png";
import image2 from "../images-drop/image2.png";
import image3 from "../images-drop/image3.png";
import image4 from "../images-drop/image4.png";
import image5 from "../images-drop/image5.png";
import image6 from "../images-drop/image6.png";
import image7 from "../images-drop/image7.png";
import image8 from "../images-drop/image8.png";
import image9 from "../images-drop/image9.png";
import image10 from "../images-drop/image10.png";
import image11 from "../images-drop/image11.png";
import image12 from "../images-drop/image12.png";
import image13 from "../images-drop/image13.png";
import image14 from "../images-drop/image14.png";
import image15 from "../images-drop/image15.png";
import image16 from "../images-drop/image16.png";
import image17 from "../images-drop/image17.png";
import image18 from "../images-drop/image18.png";
import image19 from "../images-drop/image19.png";
import image20 from "../images-drop/image20.png";
import image21 from "../images-drop/image21.png";
import image22 from "../images-drop/image22.png";
import image23 from "../images-drop/image23.png";
import image24 from "../images-drop/image24.png";
import image25 from "../images-drop/image25.png";
import image26 from "../images-drop/image26.png";
import image27 from "../images-drop/image27.png";

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
  image5
]


const ImageGrid = () => {
  return (
    <div className="image-grid-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
