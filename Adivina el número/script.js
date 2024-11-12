// Genera un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0; // Para contar el número de intentos

// Función para manejar el intento del usuario
function adivinarNumero() {
  const numeroUsuario = parseInt(document.getElementById("inputNumero").value);
  intentos++;

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    document.getElementById("mensaje").innerText = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  if (numeroUsuario === numeroAleatorio) {
    document.getElementById("mensaje").innerText = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
  } else if (numeroUsuario < numeroAleatorio) {
    document.getElementById("mensaje").innerText = "Muy bajo. Intenta con un número mayor.";
  } else {
    document.getElementById("mensaje").innerText = "Muy alto. Intenta con un número menor.";
  }
}
