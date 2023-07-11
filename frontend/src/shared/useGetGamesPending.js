// useGetGamePending.js

import { useEffect } from "react";
import axios from "../APIS/axios";
import { useNavigate } from "react-router-dom";

function useGetGamesPending(setPendingGames) {
  let navigate = useNavigate();

  const getAllGamesPending = async () => {
    try{
      const token = localStorage.getItem("token");
      axios.defaults.headers["cookies"] = `${token}`;
      const response = await axios.get("/game/getAll");
      setPendingGames(response.data);
    }catch(err){
      console.log(err);
      navigate("/login");
    }


 
  };
  useEffect(() => {
    getAllGamesPending();
  }, []);
}

export default useGetGamesPending;
