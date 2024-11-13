// Arreglo de preguntas
const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      opciones: ["París", "Madrid", "Roma", "Berlín"],
      respuesta: "París"
    },
    {
      pregunta: "¿Cuántos planetas hay en el sistema solar?",
      opciones: ["7", "8", "9", "10"],
      respuesta: "8"
    },
    {
      pregunta: "¿Quién pintó la Mona Lisa?",
      opciones: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"],
      respuesta: "Leonardo da Vinci"
    },
    {
      pregunta: "¿Cuál es el metal más abundante en la Tierra?",
      opciones: ["Hierro", "Oro", "Aluminio", "Plata"],
      respuesta: "Aluminio"
    }
  ];
  
  // Variables para la trivia
  let preguntaActual = 0;
  let puntaje = 0;
  
  // Función para mostrar una pregunta
  function mostrarPregunta() {
    // Limpiamos el área de resultado si hubiera texto
    document.getElementById("resultado").innerText = "";
  
    const preguntaObj = preguntas[preguntaActual];
    document.getElementById("pregunta").innerText = preguntaObj.pregunta;
    
    // Limpiar las opciones antes de agregarlas
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";
  
    preguntaObj.opciones.forEach(opcion => {
      const boton = document.createElement("button");
      boton.innerText = opcion;
      boton.classList.add("opcion-boton");
      boton.onclick = () => verificarRespuesta(opcion);
      opcionesDiv.appendChild(boton);
    });
  }
  
  // Función para verificar la respuesta
  function verificarRespuesta(opcionSeleccionada) {
    const preguntaObj = preguntas[preguntaActual];
  
    if (opcionSeleccionada === preguntaObj.respuesta) {
      puntaje++;
      document.getElementById("resultado").innerText = "¡Correcto!";
    } else {
      document.getElementById("resultado").innerText = `Incorrecto. La respuesta era: ${preguntaObj.respuesta}`;
    }
  
    // Deshabilitar botones después de la respuesta
    document.querySelectorAll(".opcion-boton").forEach(boton => {
      boton.disabled = true;
    });
  }
  
  // Función para pasar a la siguiente pregunta
  function siguientePregunta() {
    preguntaActual++;
  
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarPuntajeFinal();
    }
  }
  
  // Función para mostrar el puntaje final
  function mostrarPuntajeFinal() {
    document.getElementById("pregunta").innerText = `Tu puntuación final es: ${puntaje} de ${preguntas.length}`;
    document.getElementById("opciones").innerHTML = "";
    document.getElementById("siguiente").style.display = "none"; // Ocultar el botón de siguiente
    document.getElementById("resultado").innerText = puntaje === preguntas.length ? "¡Perfecto!" : "Gracias por jugar";
  }
  
  // Iniciar el cuestionario mostrando la primera pregunta
  mostrarPregunta();
  