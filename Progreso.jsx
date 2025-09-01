import React, { useState } from "react";
import lecciones from "../data/lecciones";

function Progreso() {
  const [progreso, setProgreso] = useState(
    JSON.parse(localStorage.getItem("progreso")) || {}
  );

  const totalActividades = lecciones.reduce(
    (acc, leccion) => acc + leccion.actividades.length,
    0
  );
  const correctas = Object.values(progreso).filter(Boolean).length;

  const reiniciar = () => {
    localStorage.removeItem("progreso");
    setProgreso({});
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Progreso</h2>
      <p>
        Actividades correctas: {correctas} de {totalActividades}
      </p>
      <button
        onClick={reiniciar}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Reiniciar progreso
      </button>
    </div>
  );
}

export default Progreso;