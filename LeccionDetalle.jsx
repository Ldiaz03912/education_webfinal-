import React, { useState } from "react";
import { useParams } from "react-router-dom";
import lecciones from "../data/lecciones";

function LeccionDetalle() {
  const { id } = useParams();
  const leccion = lecciones[id];
  const [progreso, setProgreso] = useState(
    JSON.parse(localStorage.getItem("progreso")) || {}
  );

  const handleRespuesta = (actividadId, correcta) => {
    const nuevoProgreso = { ...progreso, [actividadId]: correcta };
    setProgreso(nuevoProgreso);
    localStorage.setItem("progreso", JSON.stringify(nuevoProgreso));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-700">{leccion.titulo}</h2>
      <p className="mt-2 mb-6">{leccion.contenido}</p>

      {leccion.actividades.map((act, index) => (
        <div key={index} className="mb-6 p-4 border rounded bg-white">
          <p className="font-semibold">{act.pregunta}</p>

          {act.tipo === "multiple" &&
            act.opciones.map((op, i) => (
              <button
                key={i}
                onClick={() => handleRespuesta(act.id, op === act.respuesta)}
                className="block mt-2 p-2 border rounded hover:bg-green-200"
              >
                {op}
              </button>
            ))}

          {act.tipo === "truefalse" && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleRespuesta(act.id, "Verdadero" === act.respuesta)}
                className="p-2 border rounded hover:bg-green-200"
              >
                Verdadero
              </button>
              <button
                onClick={() => handleRespuesta(act.id, "Falso" === act.respuesta)}
                className="p-2 border rounded hover:bg-green-200"
              >
                Falso
              </button>
            </div>
          )}

          {act.tipo === "fill" && (
            <input
              type="text"
              placeholder="Escribe tu respuesta"
              onBlur={(e) =>
                handleRespuesta(act.id, e.target.value.trim().toLowerCase() === act.respuesta.toLowerCase())
              }
              className="mt-2 p-2 border rounded w-full"
            />
          )}

          {progreso[act.id] !== undefined && (
            <p className={`mt-2 ${progreso[act.id] ? "text-green-600" : "text-red-600"}`}>
              {progreso[act.id] ? "✔ Correcto" : "✘ Incorrecto"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default LeccionDetalle;