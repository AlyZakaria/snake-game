import React, { Component } from "react";
import Table from "./Component/Table";
// import HostPage from "./Component/HostPage";

// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends Component {
    render() {
        return (
            <div class='justify-center'>
                <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li class="w-full">
                        <a href='/' class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Join to Room</a>
                    </li>
                    <li class="w-full">
                        <a href='./Component/HostPage.js' class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Hosting Room</a>
                    </li>
                </ul>

                <br />
                <br />
                <br />
                <Table />
                {/* <HostPage /> */}
            </div>
        );
    }
}

export default App;