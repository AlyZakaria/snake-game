import { useEffect, useState } from "react";
import { socket } from "../socket.js";
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
          position.position = response.data.newPosition.toString();
        }
        return position;
      });
      console.log(newPositions);
      setPositions(newPositions);
      setDiceValue(response.data.diceVal);

      setPlay(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setMoved(true);
    }
  };

  // const handleDiceRoll = () => {
  //   setMoved(false);
  //   console.log(play);
  // };

  socket.on(`${room_id}`, async (msg) => {
    console.log("here");
    if (msg === "game ended") {
    } else {
      const token = localStorage.getItem("token");
      console.log(token);
      axios.defaults.headers["cookies"] = `${token}`;

      const response = await axios.post("usergame/play", { room_id });
      console.log(response);
      // setUsers(response.data);
    }
  });

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
