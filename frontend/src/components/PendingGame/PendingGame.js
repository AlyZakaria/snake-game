import './styles.css'

function PendingGame(props){
    let game = props.game;
    function join(){

    }
    return(
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            
        <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
            {game.game_id}
        </th>
        <td className="px-6 py-4">
            {game.created_by}
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