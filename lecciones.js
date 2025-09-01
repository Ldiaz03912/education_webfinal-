const lecciones = [
  {
    titulo: "Fotosíntesis",
    descripcion: "El proceso mediante el cual las plantas producen alimento.",
    contenido:
      "La fotosíntesis es el proceso en el cual las plantas producen glucosa y oxígeno a partir de dióxido de carbono, agua y energía solar.",
    actividades: [
      {
        id: "f1",
        tipo: "multiple",
        pregunta: "¿Dónde ocurre principalmente la fotosíntesis?",
        opciones: ["Raíces", "Hojas", "Flores"],
        respuesta: "Hojas",
      },
      {
        id: "f2",
        tipo: "truefalse",
        pregunta: "La fotosíntesis produce oxígeno como subproducto.",
        respuesta: "Verdadero",
      },
      {
        id: "f3",
        tipo: "fill",
        pregunta: "Completa: La fotosíntesis utiliza ______ y agua.",
        respuesta: "dióxido de carbono",
      },
    ],
  },
  {
    titulo: "Ciclo del Agua",
    descripcion: "El recorrido natural del agua en la Tierra.",
    contenido:
      "El ciclo del agua describe cómo el agua circula entre la superficie terrestre y la atmósfera a través de la evaporación, condensación y precipitación.",
    actividades: [
      {
        id: "c1",
        tipo: "multiple",
        pregunta: "¿Cuál es la primera etapa del ciclo del agua?",
        opciones: ["Condensación", "Evaporación", "Precipitación"],
        respuesta: "Evaporación",
      },
      {
        id: "c2",
        tipo: "truefalse",
        pregunta: "La precipitación siempre cae en forma de lluvia.",
        respuesta: "Falso",
      },
      {
        id: "c3",
        tipo: "fill",
        pregunta: "Completa: El agua que se filtra en el suelo se llama ______.",
        respuesta: "infiltración",
      },
    ],
  },
  {
    titulo: "Ecosistemas",
    descripcion: "Las comunidades de seres vivos y su entorno.",
    contenido:
      "Un ecosistema es una comunidad de organismos que interactúan entre sí y con su ambiente físico.",
    actividades: [
      {
        id: "e1",
        tipo: "multiple",
        pregunta: "¿Qué tipo de ecosistema es la selva amazónica?",
        opciones: ["Desierto", "Bosque tropical", "Sabana"],
        respuesta: "Bosque tropical",
      },
      {
        id: "e2",
        tipo: "truefalse",
        pregunta: "Los desiertos son ecosistemas sin vida.",
        respuesta: "Falso",
      },
      {
        id: "e3",
        tipo: "fill",
        pregunta: "Completa: Los ecosistemas marinos cubren más del ____% de la Tierra.",
        respuesta: "70",
      },
    ],
  },
];

export default lecciones;