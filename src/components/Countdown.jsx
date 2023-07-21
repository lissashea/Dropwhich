import React, { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    function calculateTimeLeft() {
      const difference = targetDate - new Date();
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    setTimeLeft(calculateTimeLeft());

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timerId);
      window.removeEventListener("resize", handleResize);
    };
  }, [targetDate]);

  return (
    <div className="countdownContainer">
      <p className="countdownText">
      <h2>Order Countdown:</h2>
        {timeLeft.days} {timeLeft.days === 1 ? "Day" : "Days"}{" "}
        {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
        {timeLeft.seconds} Seconds
      </p>
      <p className="orderDeadline">
        Orders must be submitted by Tuesday at 12 PM PST for Thursday delivery.
      </p>
    </div>
  );
}

export default Countdown;
