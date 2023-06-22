// Practico N2 punto 3
const readlineSync = require("readline-sync");

const numeroEntero = readlineSync.question("Por favor, ingrese un numero");
if ((numeroEntero %2) === 0 && numeroEntero >= 0) {
    console.log("El numero es positivo y par");
} else if ((numeroEntero %2) !== 0 && numeroEntero >= 0) {
    console.log("El numero es positivo e impar");
} else if (numeroEntero < 0) {
    console.log("El numero es negativo");
} else if (numeroEntero = 0) {
    console.log("El numero es cero");
}