import React, { useRef, useEffect } from "react";

const Player = ({ color, left, bottom }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Draw the circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 4;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.lineWidth = 5; // Adjust border width as desired
    context.strokeStyle = "black"; // Adjust border color as desired
    context.stroke();

    // Draw the filled circle
    context.beginPath();
    context.arc(
      centerX,
      centerY,
      radius - context.lineWidth / 2,
      0,
      2 * Math.PI
    );
    context.fillStyle = color; // Adjust fill color as desired
    context.fill();
  }, []);

  const canvasStyles = {
    position: "absolute",
    width: "6rem",
  };

  return <canvas ref={canvasRef} style={canvasStyles} />;
};

export default Player;
