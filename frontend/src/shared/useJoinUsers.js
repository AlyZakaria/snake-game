
import { useEffect  } from "react";
import { socket } from "../socket.js";
import axios from "../APIS/axios.js";

function useJoinUsers(game_id, setUsers, navigate){

    useEffect(() => {
        const getPlayers = async () => {
            try{
            const token = localStorage.getItem("token");
            axios.defaults.headers["cookies"] = `${token}`;
            
            const response = await axios.post(`/game/getPlayers`, {game_id: game_id});
            console.log(response)
            if (response.data.msg === 'start the game'){
                console.log("starting");
                navigate(`/running/${game_id}`)
                return;
            }
            // console.log(response.data);
            setUsers(response.data);
            }catch(err){
                navigate("/login");
                return;
            }
        }
        getPlayers();
    }, []);
    
        socket.on(`${game_id}`, async (msg) => {
            console.log("here");
            if (msg === "someone joined") {
                const token = localStorage.getItem("token");
                // console.log(token);
                axios.defaults.headers["cookies"] = `${token}`;
                
                const response = await axios.post(`/game/getPlayers`, {game_id: game_id});
                setUsers(response.data);

            }
            if(msg === "start"){
                console.log("starting");
                navigate(`/running/${game_id}`)
            }
        }); 

        
}

export default useJoinUsers;