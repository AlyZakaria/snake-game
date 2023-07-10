import React from "react";
import template_1 from "../assets/templates/1.jpg";
import Player from "./Player";

function Board({ position, color }) {
  return (
    <div className="relative">
      <img src={template_1} alt="Background" className="w-full h-auto" />
      <div className="grid absolute top-0 left-0 w-full h-full grid-cols-10 grid-rows-10 gap-2 p-1">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className=" relative flex justify-center items-center"
          >
            {console.log(index)}
            {position === 100 - 1 - index ? <Player color={color} /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
