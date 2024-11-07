// Inicializar el valor del contador en 0

let contador = 0;

// Función para aumentar el contador

function aumentar() {
    contador++;
    actualizarContador();
}

// Función para disminuir el contador

function disminuir() {
    contador--;
    actualizarContador();
}

// Función para actualizar el valor mostrado del contador

function actualizarContador() {
    document.getElementById("contador").innerText = contador;
}