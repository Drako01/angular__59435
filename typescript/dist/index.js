"use strict";
console.log("Hola mundo desde TS");
console.log("Log traducido desde TS a JS");
let edad = 20;
let nombre = "Alejandro";
let isLoading = false;
let precio = 10;
let frutas = ["Banana", "Pera", "Manzana"];
let frutas1 = ["Banana", "Pera", "Manzana"]; // Otra forma de hacerlo
let numerosYLetras = [1, "Ale"];
let numerosYLetras1 = [1, "Ale"]; // Otra forma de hacerlo
let productos = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1080.50
    }
];
function saludar(nombre) {
    console.log(`Hola ${nombre.toUpperCase()}!`);
}
saludar("Alejandro");
