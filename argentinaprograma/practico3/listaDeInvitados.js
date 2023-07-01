// Practico 3

let personas = ["Jose", "Maria","Juan", "Andres", "Lionel","Sofia", "Leandro","Emilia"];

let listaRechazados = [];
let listaAdmitidos = [];


for (let i = 0; i < personas.length; i++){
    if (personas[i] === "Jose" || personas[i] === "Sofia"){
        listaRechazados.push(personas[i]);
    } else {
        listaAdmitidos.push(personas[i]);
    }
}

console.log("La lista de invitados admitidos es: ")

for (let i = 0; i < listaAdmitidos.length; i++){
    console.log(listaAdmitidos[i]);
}

console.log("La lista de invitados rechazados es: ")

for (let i = 0; i < listaRechazados.length; i++){
    console.log(listaRechazados[i]);
}