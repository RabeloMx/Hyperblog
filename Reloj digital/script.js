// Función para obtener y mostrar la hora actual
function actualizarReloj() {
    const hora = new Date();
    const horas = String(hora.getHours()).padStart(2, '0');
    const minutos = String(hora.getMinutes()).padStart(2, '0');
    const segundos = String(hora.getSeconds()).padStart(2, '0');

    // Formato de la hora: HH:MM:SS
    const horaActual = `${horas}:${minutos}:${segundos}`;

    // Actualizar el contenido de div con la hora actual
    document.getElementById("reloj").innerText = horaActual;
}

// Llamar a la función actualizar Reloj cada segundo
setInterval(actualizarReloj, 1000);

//Llamar función al cargar la página para mostrar la hora
actualizarReloj();