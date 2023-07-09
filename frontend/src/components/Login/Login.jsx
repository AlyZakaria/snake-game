import logo from '../../snake-and-ladders.png'
import './styles.css'
function Login(){
    return (
        <div>
            <div className = "container">
                <div className = "login">
                        <div>
                            <img src = {logo} width = {300} height = {300}/>
                        </div>
                        <div className = "input">
                        <input type = "text" placeholder = "Username" />
                        </div>
                        <div className = "input">
                        <input type = "password" placeholder = "Password" />
                        </div>
                </div>
            </div>

        </div>
    );
}

export default Login;   