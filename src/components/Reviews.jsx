import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Reviews.css";
import review1 from "../images-drop/review1.jpeg";

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

  return (
    <div className="reviews-container">
      <Slider {...sliderSettings}>
        <Card img={review1} />
        <Card img={review1} />
        <Card img={review1} />
      </Slider>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        zIndex: 3,
        marginTop: "25px"
      }}
    >
      <img
        src={img}
        alt="Review"
        style={{
          width: "300px",
          height: "600px",
          border: "5px solid white",
          zIndex: 3,
        }}
      />
      <p style={{ fontStyle: "italic", marginTop: 25, backgroundColor:"FC6238",fontSize:"15px",color:"white", padding:25 }}>
        the best sandwich ive ever had
      </p>
      <p>
        <span
          style={{
            fontWeight: "500",
            color: "orange",
            zIndex: 3,
            backgroundColor:"white"
          }}
        >
          Lissa Warshaw{" "}
        </span>
        , Friend
      </p>
    </div>
  );
};

export default Reviews;
