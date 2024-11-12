const citas = [
    "La vida es lo que ocurre mientras estás ocupado haciendo otros planes. - John Lennon",
  "No dejes para mañana lo que puedes hacer hoy. - Benjamin Franklin",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
  "Haz de cada día tu obra maestra. - John Wooden",
  "La creatividad es inteligencia divirtiéndose. - Albert Einstein",
  "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs"
];

// Función para generar una cita aleatoria

function generarCita() {
    const indiceAleatorio = Math.floor(Math.random() * citas.length);
    const citaSeleccionada = citas[indiceAleatorio];
    document.getElementById("cita").innerText = citaSeleccionada;
}