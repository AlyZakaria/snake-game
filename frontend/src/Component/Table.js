
import React from "react";
function Table () {
        return (
    <table class="w-full text-sm text-center text-gray-500 shadow-lg align-middle overflow-x-auto sm:rounded-lg " >
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
                <th scope="col" class="px-6 py-4">
                    Room ID
                </th>
                <th scope="col" class="px-6 py-4">
                    User ID
                </th> 
                <th scope="col" class="px-6 py-4">
                    Number of Players
                </th>
                <th scope="col" class="px-6 py-4">
                    Join
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                </th>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join</button>

                </td>
            </tr>
            
        </tbody>
    </table>
        );
    }



export default Table