import { useEffect } from "react";
import axios from "../APIS/axios";

function useHostGame(host, setHost, navigate, game) {
  const Hosting = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers["cookies"] = `${token}`;
      const response = await axios.post("/game/create", game);
      console.log(response.data);
      if (response.status === 200) 
        navigate(`/waiting/${response.data.id}`);
      
    } catch (err) {
        console.log(err);
        // navigate("/login");
    } finally {
        setHost(false);
    }
  };

  useEffect(() => {
    if (host) Hosting();
  }, [host]);
}

export default useHostGame;
