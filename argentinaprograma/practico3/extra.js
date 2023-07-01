// practico 3 - extra

let listaRechazados = ["Jose", "Sofia"];
let listaAdmitidos = ["Maria", "Juan","Andres", "Lionel", "Leandro", "Emilia"];

listaRechazados.sort();
listaAdmitidos.sort();

console.log("La lista ordenada de invitados admitidos es: ");

for (let i = 0; i < listaAdmitidos.length; i++){
    console.log(listaAdmitidos[i]);
}

console.log("La lista ordenada de invitados rechazados es: ");

for (let i = 0; i < listaRechazados.length; i++){
    console.log(listaRechazados[i]);
}