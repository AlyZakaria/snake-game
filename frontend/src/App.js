import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from "./pages/Game";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/game/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
