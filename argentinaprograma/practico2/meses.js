// Practico N2 punto 2

const readlineSync = require("readline-sync");

let mes = readlineSync.question("Ingrese un numero del 1 al 12");

mes = [0, "enero","febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let cantidadDeDias = [0, "31", "28","31","30","31","30","31","31","30","31","30","31"];

console.log("La cantidad de dias del mes de" + mes[1] + "es " + cantidadDeDias[1]);