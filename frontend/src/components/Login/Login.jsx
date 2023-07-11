import logo from "../../snake-and-ladders.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import useLogin from "../../shared/useLogin";
import { useState } from "react";
import Loading from "../Loading/Loading";


let username = "";
let password = "";

function Login() {
  let navigate = useNavigate();
  let [loginStatus , setLoginStatus] = useState(false); 
  let [loading, setLoading] = useState(false);
  if(loginStatus){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
  }
  useLogin(loginStatus, setLoginStatus, navigate, loading, setLoading ,{ username, password });


  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="loginBack">
    <div className="container ">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img src={logo} width="300" height="300" />
        </div>
        <h2>Login</h2>
        <div className="col-12 input">
          <input id ="username" type="text" placeholder="Username" />
        </div>
        <div className="col-12 input">
          <input id = "password" type="password" placeholder="Password" />
        </div>
        <div className="row d-flex justify-content-center">
            
          { !loading &&
          <div className="d-flex justify-content-center">
          <div className="col-md-1 col-12">
            <button onClick = {() => setLoginStatus(true)} >Login</button>
          </div>
          <div className = "col-md-1 col-12">
            <button  onClick={goToRegister}>Register</button>
          </div>
          </div>
        }
        </div>
      </div>
      <p id = "loginMessage"></p>
      { loading && <Loading/>}
    </div>
    </div>
  );
}

export default Login;


