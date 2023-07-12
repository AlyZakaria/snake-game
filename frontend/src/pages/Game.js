import React, { useEffect, useState } from "react";

import Board from "../components/Board";
import Dice from "../components/Dice";
import useGetBoard from "../shared/useGetBoard";
import { useParams } from "react-router";
import usePlay from "../shared/usePlay";

const Game = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  useGetBoard(id, setBoard);

  const [positions, setPositions] = useState();

  const [play, setPlay] = useState();
  const [moved, setMoved] = useState(true);
  const [diceValue, setDiceValue] = useState();
  const handleDiceRoll = () => {
    setMoved(false);
    // console.log(play);
    // const newPositions = positions.map((position) => {
    //   if (position.user_id === play.newCurrentUser) {
    //     position.position = play.position;
    //   }
    //   return position;
    // });

    // // setPosition(newPosition);
    // setDiceValue(play.diceVal);
  };

  usePlay(moved, id, setPlay, setMoved, positions, setPositions, setDiceValue);
  console.log(positions);

  useEffect(() => {});
  useEffect(() => {
    setPositions(board?.positions);
  }, [board]);
  if (board) {
    // setPositions(board.positions);
    return (
      <div>
        <div className="flex justify-center mt-36 gap-2">
          <div className="w-1/2">
            {board ? (
              <Board
                imageUrl={board.url.style}
                positions={positions}
                colors={board.colors}
              />
            ) : (
              ""
            )}{" "}
          </div>
          <div className="w-10 h-10">
            <Dice diceValue={diceValue} onDiceRoll={handleDiceRoll} />
          </div>{" "}
        </div>
      </div>
    );
  }
};

export default Game;
