import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between">
      <h1 className="font-bold">Ciencias Naturales</h1>
      <div className="flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/lecciones">Lecciones</Link>
        <Link to="/progreso">Progreso</Link>
      </div>
    </nav>
  );
}

export default Navbar;