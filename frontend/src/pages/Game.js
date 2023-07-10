import React, { useEffect, useState } from "react";
import template_1 from "../assets/templates/1.jpg";

import Player from "../components/Player";
import Board from "../components/Board";
import Dice from "../components/Dice";
const Game = () => {
  // const movement = 10;
  // const initial_left = -7;
  // const max_left = 83;
  // const initial_bottom = -1;
  // const max_bottom = 89;
  // const color = "violet";
  // const snake_order = true;
  // const [moveRight, setMoveRight] = useState(true);

  // const [position, setPosition] = useState(1);
  // const [left, setLeft] = useState(initial_left);
  // const [bottom, setBottom] = useState(initial_bottom);

  // const [diceValue, setDiceValue] = useState(0);
  // const handleDiceRoll = (diceValue) => {
  //   const newPosition = position + diceValue
  //   setLeft(((position - 1) % 10) * movement + initial_left);
  //   setBottom(Math.floor((position - 1) / 9) * movement + initial_bottom);

  //   setPosition(newPosition);

  //   setDiceValue(diceValue);
  // };

  // // useEffect(() => {
  //   // if (snake_order) {
  //   //   if ((position - 1) % 10 === 0) {
  //   //     setMoveRight(!moveRight);
  //   //   }

  //   //   if (moveRight) {
  //   //     setLeft(((position - 1) % 10) * movement + initial_left);
  //   //     setBottom(Math.floor((position - 1) / 10) * movement + initial_bottom);
  //   //   } else {
  //   //     setLeft(((position - 1) % 10) * movement + initial_left);
  //   //     setBottom(Math.floor((position - 1) / 10) * movement + initial_bottom);
  //   //   }
  //   // // } else {
  //   // setLeft(((position - 1) % 10) * movement + initial_left);
  //   // setBottom(Math.floor((position - 1) / 9) * movement + initial_bottom);
  //   // }
  // // }, [position]);

  // return (
  //   <div>
  //     <div className="flex justify-center mt-36 gap-2">
  //       {/* <div className="relative"> */}
  //       <div className="w-1/2 relative">
  //         <img src={template_1} alt="game" />
  //         <Player left={left} bottom={bottom} color={color} />
  //       </div>
  //       {/* <button onClick={() => setPosition((p) => p + 1)}>click</button> */}
  //       <div className="w-10 h-10">
  //         <Dice diceValue={diceValue} onDiceRoll={handleDiceRoll} />
  //       </div>
  //     </div>
  //   </div>
  // );

  const [position, setPosition] = useState(1);

  return (
    <div>
      <div className="flex justify-center mt-36">
        <div className="w-1/2">
          <Board position={position} color={"blue"} snake_order={"true"} />
        </div>
      </div>
      <button onClick={() => setPosition((p) => p + 1)}>move</button>
    </div>
  );
};

export default Game;
