import { useEffect, useState } from "react";
import axios from "../APIS/axios.js";

function useGetBoard(roomId, setBoard) {
  const getBoard = async (roomId, setBoard) => {
    try {
      const accessToken = sessionStorage.getItem("cookies");
      const response = await axios.get("/usergame/get_board", {
        params: { room_id: roomId },
        headers: { cookies: accessToken },
      });
      // console.log(response);
      setBoard(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBoard(roomId, setBoard);
  }, []);
}

export default useGetBoard;
