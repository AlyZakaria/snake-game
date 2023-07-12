
import React from "react";
import logo from '../images/logo.png'
import useJoinUsers from "../shared/useJoinUsers.js";
import {useState}  from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useLeave from "../shared/useLeave.js";


export default function Waiting() {
    let [users, setUsers] = useState([]);
    let [leaveStatus, setLeaveStatus] = useState(false);
    let navigate = useNavigate();
    let game_id = useParams().game_id;  
    console.log(game_id);
    useJoinUsers(game_id, setUsers);

    useLeave(leaveStatus, game_id,navigate);

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
                    {
                        users.length > 0 &&
                        users.map((user) => {
                            return(
                            <p className="mb-2 leading-normal">
                            <ul>
                                <li>
                                    {user.username} 
                                </li>
                            </ul>
                        </p>  
                        )})
                    }

                    <button onClick = {() => setLeaveStatus(true)}className="px-4 py-2 text-sm text-white bg-red-500 rounded shadow">
                        Leave
                    </button>
                </div>
            </div>
        </div>
    );
}