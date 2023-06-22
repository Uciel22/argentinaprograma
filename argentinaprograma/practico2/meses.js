// Practico N2 punto 2

const readlineSync = require("readline-sync");

let numero = readlineSync.question("Ingrese un numero del 1 al 12");

 let mes;

 let cantidadDeDias;

 switch (numero){
    case "1": 
    mes = "Enero";
    cantidaDeDias = 31;
    break;

    case "2":
        mes = "Febrero";
        cantidadDeDias = 28;
        break;

        case "3":
            mes = "Marzo";
            cantidadDeDias = 31;
            break;

            case "4":
                mes = "Abril";
                cantidadDeDias = 30;
                break;

                case "5":
                    mes = "Mayo";
                    cantidadDeDias = 31;
                    break;

                    case "6": 
                    mes = "Junio";
                    cantidadDeDias = 30;
                    break;

                    case "7":
                        mes = "Julio";
                        cantidadDeDias = 31;
                        break;

                        case "8":
                            mes = "Agosto";
                            cantidadDeDias = 31;
                            break;

                            case "9":
                                mes = "Septiembre";
                                cantidadDeDias = 30;
                                break;
                                
                                case "10":
                                    mes ="Octubre";
                                    cantidadDeDias = 31;
                                    break;

                                    case "11":
                                        mes = "Noviembre";
                                        cantidadDeDias = 30;
                                        break;

                                        case "12": 
                                        mes = "Diciembre";
                                        cantidadDeDias = 31;
                                        break;

                                        default:
                                            console.log("Por favor ingrese un numero entre 1 y 12");
}

console.log("La cantidad de dias del mes de " + mes + " es " + cantidadDeDias);