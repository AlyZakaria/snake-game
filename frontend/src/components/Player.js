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

    // Apply blur effect inside the circle
    // context.globalCompositeOperation = "destination-in";
    // context.filter = "blur(8px)";
    // context.fillRect(
    //   centerX - radius,
    //   centerY - radius,
    //   radius * 2,
    //   radius * 2
    // );
  }, []);

  const canvasStyles = {
    // position: "absolute",
    // bottom: `${bottom}%`,
    // left: `${left}%`,
    // height: "100%",
    width: "100%",
  };

  return <canvas ref={canvasRef} style={canvasStyles} />;
};

export default Player;
