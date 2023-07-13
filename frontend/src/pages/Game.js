import React, { useEffect, useState } from "react";

import Board from "../components/Board";
import Dice from "../components/Dice";
import useGetBoard from "../shared/useGetBoard";
import { useParams } from "react-router";
import usePlay from "../shared/usePlay";
import Player from "../components/Player";

const Game = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [players, setPlayers] = useState();
  useGetBoard(id, setBoard, setPlayers);

  const [positions, setPositions] = useState();
  const [finished, setFinished] = useState(false);
  const [play, setPlay] = useState();
  const [currentPlayer, setCurrentPlayer] = useState();
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

  usePlay(
    moved,
    id,
    setPlay,
    setMoved,
    positions,
    setPositions,
    setDiceValue,
    setPlayers,
    setCurrentPlayer,
    setFinished
  );
  console.log(positions);

  useEffect(() => {
    setPositions(board?.positions);
  }, [board]);

  if (board && players) {
    // setPositions(board.positions);
    console.log(currentPlayer);
    return (
      <div className="text-center pt-10">
        {finished && (
          <div>
            game finished and the winner is{" "}
            {players.map((player) => {
              return player.user_id === currentPlayer ? player.username : "";
            })}
          </div>
        )}
        <div className="flex justify-center mt-6 mb-4 gap-2">
          <div className="flex flex-col gap-1 w-auto">
            {players?.map((player) => {
              return (
                // <div className="flex gap-1 w-auto " key={player.user_id}>
                <div className="flex flex-row gap-1 justify-center items-center">
                  <span>{player.username}</span>
                  {/* <span> */}{" "}
                  <Player color={player.color} style={{ width: "30%" }} />
                  {/* </span> */}
                  <span className="w-1/3">
                    {player.user_id === currentPlayer ? "turn" : ""}
                  </span>
                </div>
                // </div>
              );
            })}
          </div>
          <div className="w-[90vh]">
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
