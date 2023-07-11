import React, { useState } from "react";

import Board from "../components/Board";
import Dice from "../components/Dice";

const Game = () => {
  const [position, setPosition] = useState(0);

  const [diceValue, setDiceValue] = useState(0);
  // const [played, setPlayed] = useState(false);
  const handleDiceRoll = (diceValue) => {
    const newPosition = position + diceValue;
    // if (!played) {
    // setPlayed(true);
    setPosition(newPosition);
    setDiceValue(diceValue);
    // setPlayed(false);
    // }
  };

  return (
    <div>
      <div className="flex justify-center mt-36 gap-2">
        <div className="w-1/2">
          <Board position={position} color={"blue"} />
        </div>
        <div className="w-10 h-10">
          <Dice diceValue={diceValue} onDiceRoll={handleDiceRoll} />
        </div>{" "}
      </div>
    </div>
  );
};

export default Game;
