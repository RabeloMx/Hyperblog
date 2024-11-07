// Función para actualizar el historial
function acutalizarHistorial(operacion, numero1, numero2, resultado) {
    const historialDiv = document.getElementById("historial");
    const nuevoRegistro = document.createElement("p");
    nuevoRegistro.innerText = `${numero1} ${operacion} ${numero2} = ${resultado}`;
    historialDiv.appendChild(nuevoRegistro)
}

// Función para sumar
function sumar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").innerText = resultado
    acutalizarHistorial('+', numero1, numero2, resultado)
}

// Función para restar
function restar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 - numero2;
    document.getElementById("resultado").innerText = resultado
    acutalizarHistorial('-', numero1, numero2, resultado)

}


// Función para multiplicar
function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 * numero2;
    document.getElementById("resultado").innerText = resultado
    acutalizarHistorial('*', numero1, numero2, resultado)

}

// Función para dividir
function dividir() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    // Evitar división por cero
    if (numero2 === 0) {
        alert("No se puede dividir entre cero")
    }

    const resultado = numero1 / numero2;
    document.getElementById("resultado").innerText = resultado
    acutalizarHistorial('/', numero1, numero2, resultado)

}