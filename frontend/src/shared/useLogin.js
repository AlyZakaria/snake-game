import { useEffect, useState ,useContext} from "react";
import axios from "../APIS/axios.js";
import {UserContext} from "../contexts/UserContext.js";


function useLogin(loginStatus, setLoginStatus  ,navigate,loading, setLoading ,user) {
  // let [loading, setLoading] = useState(false);
  let {userState, setUserState} = useContext(UserContext);

  const login = async () => {
    let loginMessage = document.getElementById("loginMessage");
    setLoading(true);
    try{
        const response = await axios.post("/auth/signin", user);
        console.log(response.data.response.token);
        loginMessage.innerHTML = "Login Successful";
        navigate("/home");
        localStorage.setItem("token", response.data.response.token);
        sessionStorage.setItem("access_token", response.data.response.token);
        setUserState(response.data.response);

    }catch(err){
        console.log(err);
        loginMessage.innerHTML = "Login Failed";
    }
    finally{
        setLoginStatus(false);
        setLoading(false);
    }
  };
  useEffect(() => {
    if(loginStatus) login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);
}

export default useLogin;
