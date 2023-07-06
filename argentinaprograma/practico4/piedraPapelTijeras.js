// practico 4
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";
const GANA_US = "Gana usuario";
const GANA_PC = "Gana computadora";
const EMPATE = "Empate";

// Jugada computadora
function obtenerJugadaComputadora(){
    let piedraPapelTijeras = ["piedra", "papel", "tijeras"];
let resultado = piedraPapelTijeras[Math.floor(math.random()*3)];
return resultado;
}

// Jugada usuario
const readlineSync = require("readline-sync");

function obtenerJugadaUsuario(){
let eleccion = readlineSync.question("Ingrese su elección (piedra, papel o tijeras)");

while(eleccion !== PIEDRA && eleccion !== PAPEL && eleccion !== TIJERAS){
eleccion = readlineSync.question("por favor, ingrese su elección(piedra, papel o tijeras)");
}
return eleccion;
}

// Determinar el ganador
function determinarGanador(computadora, usuario){
if ((usuario === PIEDRA && computadora === TIJERAS)||
(usuario === PAPEL && computadora === PIEDRA)||
(usuario === TIJERAS && computadora === PAPEL))
{return GANA_US;} else if ((computadora === PIEDRA && usuario === TIJERAS)||
(computadora === PAPEL && usuario === PIEDRA)||
(computadora === TIJERAS && usuario === PAPEL) ){
    return GANA_PC;
} else { return EMPATE};
} 

// Punto 5
function jugarPiedraPapelTijeras(){
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
    return resultado;
}

// punto 6
console.log("La computadora eligió: " + obtenerJugadaComputadora() + 
". El usuario eligió: " + obtenerJugadaUsuario() + ". El resultado fue: "+ determinarGanador() + ".");