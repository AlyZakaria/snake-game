import { useEffect } from "react";
import axios from "../APIS/axios.js";



function useLeave(leaveStatus, game_id,navigate){
    
    const leave = async () => {
        try{
        const token = localStorage.getItem("token");
        axios.defaults.headers["cookies"] = `${token}`;
        const response = await axios.post(`/usergame/leave`, {room_id: game_id});
        console.log(response.data);
        navigate("/home");
        }
        catch(err){
            console.log(err);
        }

    }
    useEffect(() => { 
        if(leaveStatus) leave();
    }, [leaveStatus]);
}

export default useLeave;