import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import StoreDetailPage from "./pages/StoreDetailPage";
import NotFound404 from "./pages/NotFound404";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Stores />} />
          <Route path="/tiendas/:store_id" element={<StoreDetailPage />} />
          <Route path={"/404"} element={<NotFound404 />} />
          <Route path={"/*"} element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
