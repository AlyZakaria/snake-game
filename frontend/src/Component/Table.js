
import React, { Component } from "react";
class Table extends Component {
    render() {
        return (
            <div class='container w-full align-center'>
                <div class='card '>
                    <table class="w-1/2 text-sm text-center text-gray-500 shadow-lg align-middle dark:text-gray-400 overflow-x-auto sm:rounded-lg " >
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td class="px-6 py-4">

                                </td>
                                <td class="px-6 py-4">

                                </td>
                                <td class="px-6 py-4">
                                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Join</button>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Table