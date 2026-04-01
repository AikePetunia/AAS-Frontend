import "./App.css";
import Home from "./pages/Home";
import LoMasBuscado from "./pages/LoMasBuscado";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lomasbuscado" element={<LoMasBuscado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
