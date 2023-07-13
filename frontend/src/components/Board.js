import React, { useState } from "react";
// import template_1 from "../assets/templates/1.jpg";
import snakeOrder from "../assets/boardMaps/snakeOrder";
import Player from "./Player";
import useGetImage from "../shared/useGetImage";

function Board({ imageUrl, positions, colors }) {
  //to DO: make many orders like snake order and normal etc
  console.log("in running");
  const gridToBoardIndex = snakeOrder;
  const [image, setImage] = useState();
  useGetImage(imageUrl, setImage);

  return (
    <div className="relative">
      {/* <img src={template_1} alt="Board" className="w-full h-auto" /> */}
      <img src={image} alt="Board" className="w-full h-auto" />
      <div className="grid absolute top-0 left-0 w-full h-full grid-cols-10 grid-rows-10 gap-2 p-2">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className=" relative flex justify-center items-center "
          >
            {positions?.map((position) => {
              return position.position === gridToBoardIndex[index + 1] ? (
                <Player
                  key={position.user_id}
                  color={position.color}
                  style={{ height: "100%", position: "absolute" }}
                />
              ) : (
                ""
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
