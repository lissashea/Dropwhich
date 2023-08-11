import React, { useEffect, useState } from "react"; // Import useEffect and useState
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Reviews.css";
import review1 from "../styling/review1.jpeg";
import review2 from "../styling/review2.jpeg";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        zIndex: 3, // Set the z-index to 3
      }}
    >
      Previous
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        zIndex: 3, // Set the z-index to 3
      }}
    >
      Next
    </div>
  );
};

const Reviews = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const handleCardClick = () => {
    // Trigger the slider to move to the next slide
    slider.slickNext();
  };

  let slider; // Reference to the slider component

  return (
    <div className="reviews-container">
      <Slider ref={(c) => (slider = c)} {...sliderSettings}>
        <Card img={review1} onClick={handleCardClick} />
        <Card img={review2} onClick={handleCardClick} />
        <Card img={review1} onClick={handleCardClick} />
      </Slider>
    </div>
  );
};

const Card = ({ img, onClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint (768) to suit your needs
  };

  useEffect(() => {
    // Add event listener to check for mobile screen size on mount
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleImageClick = () => {
    if (isMobile) {
      onClick(); // Trigger the slider to move to the next slide
    }
  };

  return (
    <div onClick={handleImageClick} role="button" tabIndex="0">
      {/* Use anchor tag with onClick to make the image clickable */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          zIndex: 3,
          marginTop: "25px",
          marginBottom: "0px",
        }}
      >
        <img
          src={img}
          alt="Review"
          style={{
            width: "300px", // Use 100% to make it responsive
            height: "60vh",
            border: "5px solid white",
            zIndex: 3,
          }}
          onClick={
            onClick
          } /* Add onClick to the img tag for non-mobile devices */
        />
        <p
          style={{
            fontStyle: "italic",
            marginTop: 10,
            backgroundColor: "#FC6238",
            fontSize: "25px",
            color: "white",
            padding: 7,
            borderRadius: 25,
          }}
        >
          "the best sandwich ive ever had"
        </p>
        <p style={{ backgroundColor: "#FC6238", color: "#FFD872" }}>
          <span
            style={{
              fontWeight: "500",
              color: "#FFD872",
              zIndex: 3,
              backgroundColor: "FC6238",
            }}
          >
            Lissa Warshaw{" "}
          </span>
          , Friend
        </p>
      </div>
    </div>
  );
};

export default Reviews;
