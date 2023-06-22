// Practico 2 punto 4

const readlineSync = require("readline-sync");

let numero = readlineSync.question("Ingrese un numero del 1 al 7");

let diasDeLaSemana;

switch (numero){
    case "1":
        diasDeLaSemana = "lunes";
        break;
        case "2":
            diasDeLaSemana = "martes";
            break;
            case "3":
                diasDeLaSemana = "miércoles";
                break;
                case "4":
                    diasDeLaSemana = "jueves";
                    break;
                    case "5":
                        diasDeLaSemana = "viérnes";
                        break;
                        case "6":
                            diasDeLaSemana = "sábado";
                            break;
                            case "7":
                                diasDeLaSemana = "domingo";
                                break;
                                default:
                                    console.log("Número inválido")
}
console.log("Hoy es "+ diasDeLaSemana);