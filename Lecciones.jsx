import React from "react";
import { Link } from "react-router-dom";
import lecciones from "../data/lecciones";

function Lecciones() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lecciones</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {lecciones.map((leccion, index) => (
          <Link
            key={index}
            to={`/lecciones/${index}`}
            className="p-4 bg-white rounded shadow hover:bg-green-100"
          >
            <h3 className="font-bold">{leccion.titulo}</h3>
            <p className="text-sm">{leccion.descripcion}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Lecciones;