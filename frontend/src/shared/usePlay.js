import { useEffect, useState } from "react";
import axios from "../APIS/axios.js";

function usePlay(
  moved,
  room_id,
  setPlay,
  setMoved,
  positions,
  setPositions,
  setDiceValue
) {
  const play = async (
    moved,
    room_id,
    setPlay,
    setMoved,
    positions,
    setPositions,
    setDiceValue
  ) => {
    try {
      const accessToken = sessionStorage.getItem("cookies");
      const response = await axios.post(
        "usergame/play",
        { room_id },
        {
          headers: { cookies: accessToken },
        }
      );

      console.log(response);

      const newPositions = positions.map((position) => {
        if (position.user_id === response.data.newCurrentUser) {
          position.position = response.data.newPosition;
        }
        return position;
      });
      console.log(newPositions);
      setPositions(newPositions);
      setDiceValue(response.data.diceVal);

      setPlay(response.data);
      setMoved(true);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDiceRoll = () => {
  //   setMoved(false);
  //   console.log(play);
  // };

  useEffect(() => {
    if (!moved)
      play(
        moved,
        room_id,
        setPlay,
        setMoved,
        positions,
        setPositions,
        setDiceValue
      );
  }, [moved]);
}

export default usePlay;
