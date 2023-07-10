import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/" component={Login} />
      </Routes>
    </div>
  );
}

export default App;