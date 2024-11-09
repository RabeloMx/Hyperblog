// Function Celsius to Fahrenheit
// Function Fahrenheit to Celsius
function fahrenheitToCelsius() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const resultado = (numero1 - 32) * 5 / 9;
    document.getElementById("resultado").innerText = resultado.toFixed(2); // Mostrar con dos decimales
}

// Function Celsius to Fahrenheit
function celsiusToFahrenheit() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const resultado = (numero1 * 9 / 5) + 32;
    document.getElementById("resultado").innerText = resultado.toFixed(2); // Mostrar con dos decimales
}
