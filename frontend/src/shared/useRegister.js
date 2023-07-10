import { useEffect } from "react";
import axios from "../APIS/axios.js";


function useRegister(register, setRegister, newUser){
    const registerFun = async () => {
        try{
            const response = await axios.post("/auth/signup", newUser);
            console.log(response);
            let registerMessage = document.getElementById("registerMessage");
            registerMessage.innerHTML = "Register Successful";
        }catch(error){
            console.log(error);
            let registerMessage = document.getElementById("registerMessage");
            registerMessage.innerHTML = "Register Failed";
        }finally{
            setRegister(false);
        }

    }
    useEffect(() => {
        if(register) registerFun();
    }, [register]);
}

export default useRegister;