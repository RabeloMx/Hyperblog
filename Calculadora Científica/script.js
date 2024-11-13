// Variable para almacenar la operación en curso
let operacionActual = "";
let valorDisplay = "";

function insertar(valor) {
    // agregar el número o punto al display
    valorDisplay += valor;
    document.getElementById("display").value = valorDisplay
}

function operacion(operador) {
    operacionActual = operador;
    if (["sin", "cos", "log"].includes(operador)) {
        calcular();
    } else {
        valorDisplay += " " + operador + " ";
        document.getElementById("display").value = valorDisplay;
    }
}

function calcular() {
    const partes = valorDisplay.split(" ");
    let resultado;

    // operaciones básicas
    if (partes.length === 3) {
        const num1 = parseFloat(partes[0]);
        const operador = partes[1];
        const num2 = parseFloat(partes[2]);

        switch (operador) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                resultado = num1 / num2;
                break;
            default:
                resultado = "Error";
        }
    }

    // operaciones científicas
    else if (partes.length === 1) {
        const num = parseFloat(partes[0]);

        switch (operacionActual) {
            case "sin":
                resultado = Math.sin(num * (Math.PI / 180));
                break;
            case "cos":
                resultado = Math.cos(num * (Math. PI / 180));
                break;
            case "log":
                resultado = Math.log10(num);
                break;
            default:
                resultado = "Error";
        }
    }

    // Mostrar el resultado y restablecer la operación
    document.getElementById("display").value = resultado;
    valorDisplay = resultado.toString();
    operacionActual = "";
}

function limpiar() {
    valorDisplay = "";
    operacionActual = "";
    document.getElementById("display").value = "";
}