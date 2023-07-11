import React from 'react';
// import {
//     MDBContainer,
//     MDBInput,
//     MDBBtn,
// } from 'mdb-react-ui-kit';

function Hosting() {
    return (
        <div class="w-full h-screen flex items-center justify-center">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Number of players
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="2-10" min='2' max='10' />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Type
                    </label>
                    <select id="Types" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 ">
                        <option selected>Choose a board type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>

                    </select>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Creat Room
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Hosting;