// components/Countdown.js

import React, { useState, useEffect } from 'react';
import './Countdown.css';


function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    function calculateTimeLeft() {
      const difference = targetDate - new Date();
      return {
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    setTimeLeft(calculateTimeLeft());

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timerId);
  }, [targetDate]); // targetDate added to the dependency array

  return (
    <div>
      <h2>Order Countdown:</h2>
      <p>{timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds</p>
    </div>
  );
}

export default Countdown;
