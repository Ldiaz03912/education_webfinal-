import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lecciones from "./pages/Lecciones";
import LeccionDetalle from "./pages/LeccionDetalle";
import Progreso from "./pages/Progreso";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecciones" element={<Lecciones />} />
            <Route path="/lecciones/:id" element={<LeccionDetalle />} />
            <Route path="/progreso" element={<Progreso />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;