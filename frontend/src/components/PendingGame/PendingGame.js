import './styles.css'
import { useNavigate } from "react-router-dom";
import axios from "../../APIS/axios.js"

function PendingGame(props){
    let game = props.game;
    let navigate = useNavigate();

    async function join(){
        console.log("Joining game");
        try{
            const token = localStorage.getItem("token");
            axios.defaults.headers["cookies"] = `${token}`;

            const response = await axios.post("/game/join", {game_id: game.game_id});
            console.log(response);
            navigate(`/waiting/${game.game_id}`);
        }catch(err){
            console.log(err);
        }

        
    }
    return(
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            
        <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
            {game.game_id}
        </th>
        <td className="px-6 py-4">
            {game.username}
        </td>
        <td className="px-6 py-4">
            {game.game_cap}
        </td>
        <td className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick = {join}>Join</button>

        </td>
    </tr>
    );
}

export default PendingGame;