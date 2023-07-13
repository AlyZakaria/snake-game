import { useEffect, useState } from "react";
import axios from "../APIS/axios.js";

function useGetBoard(roomId, setBoard, setPlayers) {
  const getBoard = async (roomId, setBoard) => {
    try {
      const accessToken = localStorage.getItem("token");
      console.log(accessToken);
      const board = await axios.get("/usergame/get_board", {
        params: { room_id: roomId },
        headers: { cookies: accessToken },
      });
      console.log(board);
      setBoard(board.data);

      const players = await axios.post(
        "/game/getPlayers",
        { game_id: roomId },
        {
          headers: { cookies: accessToken },
        }
      );
      setPlayers(players.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBoard(roomId, setBoard);
  }, []);
}

export default useGetBoard;
