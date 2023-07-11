
import React from "react";
import logo from '../images/logo.png'

export default function Waiting() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full rounded-lg shadow-md lg:max-w-sm ">
                <img
                    className="object-cover w-full h-48"
                    src={logo}
                    alt="board"
                />
                <div className="p-4">
                    <h5 className="text-xl font-semibold tracking-tight text-green-600">
                        Wait all Players....
                    </h5>
                    <p className="mb-2 leading-normal">
                        <ul>
                            <li>
                                User ID1
                            </li>
                        </ul>
                    </p>
                    <button className="px-4 py-2 text-sm text-white bg-red-500 rounded shadow">
                        Leave
                    </button>
                </div>
            </div>
        </div>
    );
}