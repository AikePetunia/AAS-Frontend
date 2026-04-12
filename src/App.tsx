import "./App.css";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Stores />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
