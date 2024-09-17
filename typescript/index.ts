console.log("Hola mundo desde TS");
console.log("Log traducido desde TS a JS")

let edad: number = 20;
let nombre:string = "Alejandro";

let isLoading: boolean = false;

let precio: number | string = 10;
let frutas: string[] = ["Banana", "Pera", "Manzana"];
let frutas1: Array<string> = ["Banana", "Pera", "Manzana"]; // Otra forma de hacerlo
let numerosYLetras: (string | number)[] = [1, "Ale"];
let numerosYLetras1: Array<string | number> = [1, "Ale"]; // Otra forma de hacerlo
let productos: object[] = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1080.50
    }
]

function saludar(nombre: string){
    console.log(`Hola ${nombre.toUpperCase()}!`);
}


