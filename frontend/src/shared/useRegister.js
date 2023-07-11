import { useEffect , useContext } from "react";
import axios from "../APIS/axios.js";
import {UserContext} from "../contexts/UserContext.js";



function useRegister(register, setRegister, navigate, loading, setLoading ,newUser){
    let {userState, setUserState} = useContext(UserContext);

    const registerFun = async () => {
        setLoading(true);
        try{
            const response = await axios.post("/auth/signup", newUser);
            console.log(response);
            let registerMessage = document.getElementById("registerMessage");
            registerMessage.innerHTML = "Register Successful";
            localStorage.setItem("token", response.data.token);
            sessionStorage.setItem("access_token", response.data.token);
            setUserState(response.data);

            navigate('/home');
        }catch(error){
            console.log(error);
            let registerMessage = document.getElementById("registerMessage");
            registerMessage.innerHTML = "Register Failed";
        }finally{
            setRegister(false);
            setLoading(false);
        }

    }
    useEffect(() => {
        if(register) registerFun();
    }, [register]);
}

export default useRegister;