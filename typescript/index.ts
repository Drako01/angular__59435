console.log("Hola mundo desde TS");
console.log("Log traducido desde TS a JS");

let edad: number = 20;
let nombre: string = "Alejandro";

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
        precio: 1080.5,
    },
];

function saludar(nombre: string): void {
    console.log(`Hola ${nombre.toUpperCase()}!`);
}

saludar("Alejandro");

function enviarMensaje(mensaje?: unknown): void {
    typeof mensaje === "string" ? mensaje.toUpperCase() : undefined;
}

console.log(enviarMensaje("Hola"));

function sumar(a: number, b: number): number {
    return a + b;
}

const restar = (a: number, b: number): number => a - b;

function despuesDe1Seg(accion: (a: number) => void) {
    setTimeout(() => {
        accion(5);
    }, 1000);
}

despuesDe1Seg((a) => {
    console.log(`Hola, recibimos ${a}`);
});

/**
 * Objetos
 */

interface IAlumno {
    nombre: string;
    apellido: string;
    edad: number;
    email?: string;
    estudiar?: () => void;
}

let alumnos: Array<IAlumno> = [
    {
        nombre: "Alejandro",
        apellido: "Di Stefano",
        edad: 48,
        email: "alejandro@mail.com",
    },
    {
        nombre: "Federico",
        apellido: "Di Stefano",
        edad: 16,
    },
];

let alumnos2: IAlumno[] = [];

let barby: IAlumno = {
    nombre: "Barby",
    apellido: "Gonzalez",
    edad: 41,
    email: "barby@mail.com",
};

function actualizarAlumno(id: string, update: Partial<IAlumno>) {
    // Buscar el índice del alumno por el campo 'email' (puedes cambiarlo a otro campo si lo prefieres)
    const alumnoIndex = alumnos.findIndex((alumno) => alumno.email === id);

    // Verificar si se encontró el alumno
    if (alumnoIndex !== -1) {
        // Actualizar el alumno usando el spread operator para combinar las propiedades
        alumnos[alumnoIndex] = { ...alumnos[alumnoIndex], ...update };
        console.log(`Alumno con id ${id} actualizado correctamente.`);
    } else {
        console.log(`Alumno con id ${id} no encontrado.`);
    }
}

// Ejemplo de uso
actualizarAlumno("alejandro@mail.com", {
    edad: 49,
    apellido: "Di Stéfano García",
});
console.log(alumnos);

function saludarAlumno(alumnoSinEdad: Omit<IAlumno, "edad">) { // Omite la edad

}

export class Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    email?: string;

    constructor(nombre: string, apellido: string, edad: number, email?: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    estudiar(): void {
        console.log(`Soy ${this.nombre} ${this.apellido}, y estoy estudiando`);
    }
}

const alejandro = new Alumno(
    "Alejandro",
    "Di Stefano",
    48,
    "alejandro@mail.com"
);
alejandro.estudiar();

class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito { 
    productos: Producto[] = [];

    agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    calcularTotal(): number {
        return this.productos.reduce((prev, next) => prev + next.precio, 0);
    }
}

class MyEcommerce {
    productos: Producto[] = [];
    carrito: Carrito = new Carrito();

    constructor(productos: Producto[] = []) {
        this.productos = productos;
    }

    agregarAlCarrito(producto: Producto) {
        this.carrito.agregarProducto(producto);
    }

    pagar() {
        const total = this.carrito.calcularTotal();
        console.log(`El total a pagar es: $${total}`);
        this.carrito.productos = []; // Vaciar el carrito después del pago (opcional)
    }
}

// Ahora puedes instanciar la clase con productos predeterminados
const app = new MyEcommerce([new Producto('TV LED 42"', 9999)]);

// Ejemplo de uso:
console.log("Productos disponibles en la tienda:", app.productos);

app.agregarAlCarrito(app.productos[0]);  // Agregar producto al carrito
app.pagar();  // El total a pagar es: $9999
