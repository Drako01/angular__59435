# Ejercitación para practicar:


### Ejercicios Básicos:

1. **Tipos básicos**: Define tres variables: una cadena, un número y un booleano. Luego imprime sus valores y tipos usando `console.log`.

2. **Tipos de unión**: Crea una función que acepte un parámetro que pueda ser de tipo `string` o `number`. Si es `string`, que lo devuelva en mayúsculas, y si es `number`, que lo devuelva multiplicado por 10.

3. **Funciones y parámetros opcionales**: Crea una función que acepte dos parámetros: un nombre y una edad. El parámetro edad debe ser opcional. Si se proporciona, la función debe devolver un mensaje que incluya ambos, y si no, solo el nombre.

4. **Array y tipo de unión**: Crea un arreglo que contenga tanto cadenas como números. Imprime cada elemento en consola especificando su tipo.

5. **Interface básica**: Define una interfaz llamada `Persona` con propiedades para `nombre`, `apellido`, y `edad`. Luego, crea un objeto de tipo `Persona` y muestra sus propiedades.

6. **Interface con propiedades opcionales**: Extiende la interfaz `Persona` para que incluya una propiedad opcional `email`. Luego, crea dos objetos de tipo `Persona`: uno con `email` y otro sin él.

### Ejercicios con Clases:

7. **Clase básica**: Crea una clase `Animal` que tenga una propiedad `nombre` y un método `hacerSonido` que simplemente imprima `"El animal hace un sonido"`.

8. **Herencia de clases**: Crea una clase `Perro` que extienda de `Animal` y sobrescriba el método `hacerSonido` para que imprima `"El perro ladra"`.

9. **Métodos privados**: Crea una clase `CuentaBancaria` con un saldo privado. Implementa métodos para depositar, retirar, y obtener el saldo.

10. **Constructor y propiedades públicas**: Crea una clase `Auto` con propiedades `marca`, `modelo`, y `año`. El constructor debe inicializar estas propiedades y la clase debe tener un método que devuelva una cadena con la descripción del auto.

11. **Métodos estáticos**: Crea una clase `Calculadora` que tenga un método estático `sumar(a: number, b: number): number`. Llama al método sin instanciar la clase.

12. **Getters y Setters**: Crea una clase `Producto` con propiedades `nombre` y `precio`. Usa getters y setters para obtener y actualizar el precio, asegurándote de que no pueda ser negativo.

### Ejercicios con Tipos Avanzados:

13. **Tuplas**: Define una tupla que contenga un `string` y un `number`. Luego, imprime los valores de la tupla y cambia sus posiciones.

14. **Funciones de alto orden**: Crea una función que acepte otra función como argumento. La función pasada debe tomar un número y devolver su cuadrado.

15. **Intersection types**: Define dos interfaces, `A` y `B`. Luego, crea una variable que sea una intersección de ambas interfaces y establece valores para todas las propiedades.

16. **Generics básicos**: Crea una función genérica que acepte un parámetro de cualquier tipo y lo devuelva. Luego, prueba la función con diferentes tipos de datos.

### Ejercicios con Interfaces y Generics:

17. **Interface con métodos**: Define una interfaz `Vehiculo` que tenga un método `arrancar()`. Crea dos clases `Moto` y `Bicicleta` que implementen esta interfaz con sus propios métodos.

18. **Extensión de interfaces**: Crea una interfaz `Usuario` con las propiedades `nombre` y `email`. Luego, extiende esta interfaz a `UsuarioAdmin` agregando una propiedad adicional `permisos: string[]`.

19. **Generics avanzados con interfaces**: Crea una interfaz genérica `Respuesta<T>` que tenga dos propiedades: `data` (de tipo `T`) y `exito` (de tipo booleano). Luego, define dos tipos de `Respuesta`: uno con `T` como `Usuario` y otro con `T` como un arreglo de números.

20. **Mapped types**: Crea un tipo que convierta todas las propiedades de un objeto en opcionales. Usa este tipo para crear un objeto que puede tener solo algunas de las propiedades de `Persona`.

---

### Desafíos adicionales:

- **Promesas y Async/Await**: Crea una función que devuelva una promesa que se resuelva después de 2 segundos. Usa `async/await` para llamar a esta función y muestra el resultado.
  
- **Proyecto mini-tienda**: Crea una clase `Tienda` con un inventario de productos. Implementa métodos para agregar productos al carrito y calcular el total de la compra.

