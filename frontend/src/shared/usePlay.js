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
  setDiceValue,
  setPlayers,
  setCurrentPlayer,
  setFinished
) {
  const play = async (
    moved,
    room_id,
    setPlay,
    setMoved,
    positions,
    setPositions,
    setDiceValue,
    setCurrentPlayer
  ) => {
    try {
      const accessToken = localStorage.getItem("token");
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
      console.log(response.data.newCurrentUser);
      setCurrentPlayer(response.data.newCurrentUser);

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

  useEffect(() => {
    if (!moved)
      play(
        moved,
        room_id,
        setPlay,
        setMoved,
        positions,
        setPositions,
        setDiceValue,
        setCurrentPlayer
      );
  }, [moved]);

  useEffect(() => {
    socket.on(`${room_id}`, async (msg) => {
      // console.log("here");
      if (msg === "game ended") {
        setFinished(true);
      }
      // else {
      const token = localStorage.getItem("token");
      console.log(token);
      axios.defaults.headers["cookies"] = `${token}`;

      const response = await axios.get(`usergame/positions?room_id=${room_id}`);
      setPositions(response.data);
      setDiceValue(msg.diceVal);
      // the users info has all the players in all games
      // setPlayers(msg.userInfo);
      console.log(msg.newCurrentUser);
      setCurrentPlayer(msg.newCurrentUser);

      console.log(response);
      // }
    });
  }, []);
}

export default usePlay;
