import logo from "../../snake-and-ladders.png";
import "../Login/styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useRegister from "../../shared/useRegister";
import Loading from "../Loading/Loading";


function Register() {
  let username = "";
  let password = "";
  let navigate = useNavigate();
  let [register , setRegister] = useState(false); 
  let [loading, setLoading] = useState(false);

  if(register){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
  }

  useRegister(register, setRegister, navigate, loading, setLoading ,{ username, password });

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="registerBack">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img src={logo} width="300" height="300" />
        </div>
        <h2>Register</h2>
        <div className="col-12 input">
          <input id ="username" type="text" placeholder="Username" />
        </div>
        <div className="col-12 input">
          <input id = "password" type="password" placeholder="Password" />
        </div>
        { !loading &&
        <div className="row d-flex justify-content-center">
          <div className="col-md-1 col-12">
            <button  onClick={goToLogin} >Login</button>
          </div>
          <div className = "col-md-1 col-12">
            <button  onClick = {() => setRegister(true)} >Submit</button>
          </div>
        </div>
        }
      </div>
      <p id = "registerMessage"></p>
      { loading && <Loading/>}

    </div>
    </div>
  );
}
export default Register;
