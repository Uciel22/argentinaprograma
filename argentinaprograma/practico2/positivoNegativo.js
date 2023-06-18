// Practico N2 punto 1.b
const readlineSync = require("readline-sync");

let numero = readlineSync.question("Ingrese un número");
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero = 0){
    console.log("El número es cero");
} else if (numero < 0) {
    console.log("El numero es negativo");
}