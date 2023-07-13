import React, { useState, useEffect } from "react";

const Timer = ({ remainingTime, setRemainingTime }) => {
  useEffect(() => {
    // Start the countdown
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval and reset the remaining time when it reaches 0
    if (remainingTime === 0) {
      clearInterval(interval);
      // Perform any action you want after the timeout completes

      // Reset the remaining time to initial value
      setRemainingTime(10);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  return (
    <div>
      <p>Remaining Time: {remainingTime} seconds</p>
    </div>
  );
};

export default Timer;
