import logo from "../../snake-and-ladders.png";
import "./styles.css";
function Login() {
  return (
    <div className="container">
      <form className="login">
        <div className="logo">
          <img src={logo} width={300} height={300} />
        </div>
        <div className="input">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="buttons">
          <button type="submit">Login</button>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
