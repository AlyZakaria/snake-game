import React, { useState , useContext} from "react";
import Table from "./Table";
import Hosting from "./Hosting";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../contexts/UserContext.js";


const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  let {userState, setUserState} = useContext(UserContext);

  let navigate = useNavigate();

  // console.log(userState);

  function signOut() {
    sessionStorage.removeItem("access_token");
    localStorage.removeItem("token");
    setUserState({});
    navigate("/");
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Join to Room
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Host Room
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden "} id="link1">
                  <div className="w-full items-center justify-center">
                    <Table />
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="Card w-full" style={{ position: "relative" }}>
                    <Hosting />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
              {sessionStorage.getItem("access_token") && (
                <button className="signout-button" onClick={signOut}>
                  SIGN OUT
                </button>
              )}
            </div>
      </div>
    </>
  );
};

const TabsRender = () => {
  return <Tabs color="green" />;
};

export default TabsRender;