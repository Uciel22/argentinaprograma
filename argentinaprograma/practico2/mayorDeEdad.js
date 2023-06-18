//Practico 2 punto 1.a
const readlineSync = require("readline-sync");

const edad = readlineSync.question("¿Cuál es tu edad?");
if (edad >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}