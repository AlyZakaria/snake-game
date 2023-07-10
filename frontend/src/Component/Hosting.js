import React, { Component } from 'react';
// import logo from '../images/logo.png'
class Hosting extends Component {
    render() {
        return (
            <>
            <div class="w-full max-w-xs items-center justify-center">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="Number">
                            Number of Players
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="2-10" min='2' max='10' />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="Type">Board types</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder='chosoe one '>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>

                        </select>
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Create Room
                        </button>
                    </div>
                </form>
            </div>
            
        </>
        );
    }
}
export default Hosting;