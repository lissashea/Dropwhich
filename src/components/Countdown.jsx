import React, { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

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

    setTimeLeft(calculateTimeLeft());

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div>
      <h2>Order Countdown:</h2>
      <p>
        {timeLeft.days} {timeLeft.days === 1 ? "Day" : "Days"} {timeLeft.hours}{" "}
        Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
      </p>
      <p className="orderDeadline"> {/* Move className here */}
        Orders must be submitted by Tuesday at 12 PM PST for Thursday delivery.
      </p>
    </div>
  );
}

export default Countdown;
