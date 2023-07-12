import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TabsRender from "./Component/Tabs";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext.js";
import Waiting from "./Component/Waiting";

function App() {
  let [userState, setUserState] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{ userState, setUserState }}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<TabsRender />} />
            <Route path="/" element={<Login />} />
            <Route path="/waiting/:game_id" element={<Waiting />} />
          </Routes>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
