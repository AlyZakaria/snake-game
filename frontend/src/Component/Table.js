import React from "react";
import useGetGamesPending from "../shared/useGetGamesPending";
import PendingGame from "../components/PendingGame/PendingGame";
function Table() {
  let [pendingGames, setPendingGames] = React.useState([]);
  useGetGamesPending(setPendingGames);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg place-items-center" style={{ padding: '0 4em 0 4em' }}>
      <table className="w-full text-sm text-center text-gray-500 shadow-lg align-middle dark:text-gray-400 overflow-x-auto sm:rounded-lg ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              Room ID
            </th>
            <th scope="col" className="px-6 py-4">
              UserName
            </th>
            <th scope="col" className="px-6 py-4">
              Capacity
            </th>
            <th scope="col" className="px-6 py-4">
              Join
            </th>
          </tr>
        </thead>
        <tbody>
            {   pendingGames.length > 0 &&
                pendingGames.map((game) => 
                       <PendingGame game = {game} />
                )
            }
            
        </tbody>
      </table>
    </div>
  );
}

export default Table;