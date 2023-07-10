import { useEffect, useState } from "react";
import axios from "../APIS/axios.js";


function useLogin(loginStatus, setLoginStatus ,user) {

  const login = async () => {
    let loginMessage = document.getElementById("loginMessage");
    try{
        const response = await axios.post("/auth/signin", user);
        console.log(response);
        loginMessage.innerHTML = "Login Successful";
    }catch(err){
        console.log(err);
        loginMessage.innerHTML = "Login Failed";
    }
    finally{
        setLoginStatus(false);
    }
  };
  useEffect(() => {
    if(loginStatus) login();
    
  }, [loginStatus]);
}

export default useLogin;
