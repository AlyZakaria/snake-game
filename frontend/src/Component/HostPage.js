import React, { Component } from "react";
import Hosting from './Hosting'
class HostPage extends Component{
    render(){
        return(
            <div>
                <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li class="w-full">
                        <a href='/' class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Join to Room</a>
                    </li>
                    <li class="w-full">
                        <a href='./Component/Host.js' class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Hosting Room</a>
                    </li>
                </ul>
                <Hosting/>
            </div>
        );
    }
}

export default HostPage