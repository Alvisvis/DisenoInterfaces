const fs = require("fs");
const readline = require("readline");

const pedidos = [
    { id: 101, cliente: "Ana", total: 85, entregado: true },
    { id: 102, cliente: "Luis", total: 150, entregado: false },
    { id: 103, cliente: "Marta", total: 45, entregado: false },
    { id: 104, cliente: "Pedro", total: 210, entregado: true },
    { id: 105, cliente: "Lucía", total: 120, entregado: false }
];

// EJERCICIO 1. Gestión de pedidos
// a) Número de pedidos pendientes
const numPedido = pedidos.filter(pedido => pedido.entregado == false).map(pedido => pedido.id);
console.log("El numero total es:", numPedido);

// b) Importe total de pedidos pendientes
const pedidosIncompletos = pedidos.filter(pedido => pedido.entregado == false).reduce((total, pedido) => total + pedido.total, 0);
console.log("El importe total es:",pedidosIncompletos);

// c) Comprobar si algún pedido supera los 200 €
const pedidoSuperior = pedidos.find(pedido => pedido.total > 200);
console.log("El pedido es:", pedidoSuperior);

// d) Crear y ordenar un nuevo array con cliente e importe
const pedidoCliente = pedidos.filter(pedido => pedido.entregado == false).map(pedido => {
    console.log(pedido.cliente, pedido.total);
});

// EJERCICIO 2. Análisis de calificaciones
// Definir y probar la función analizarNotas(notas)
const notas = [1, 6, 4, 10];
const notasVacio = [];
function analizarNotas(notas){
    const media = notas.reduce((suma, n) => suma + n, 0) / notas.length;
    console.log(notas == 0 ? media : "No hay ninguna nota");
    const aprobado = notas.filter(nota => nota >= 5);
    console.log(aprobado != 0 ? aprobado : "No hay ningun aprobado")
}

analizarNotas(notas);
analizarNotas(notasVacio);


// EJERCICIO 3. Catálogo de videojuegos
// Leer videojuegos.json y solicitar el género por terminal
const contenido = fs.readFileSync("videojuegos.json", "utf8");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const videojuegoJS = JSON.parse(contenido);

console.log("El genero del segundo videojuego es:", videojuegoJS[2].genero);
// a) Definir la función filtrarPorGenero(videojuegos, genero)
function filtrarPorGenero(videojuegoJS, genero){
    return videojuegoJS.filter(videojuegos => 
        videojuegos.genero.toLowerCase() === genero.trim().toLowerCase());
};

rl.question("Introduce el genero: ", genero => {
    const generos = filtrarPorGenero(videojuegoJS, genero);
    console.log(generos);
    rl.close()
});

// b) Mostrar título y precio de los videojuegos encontrados
const tituloPrecio = videojuegoJS.map(videojuego => 
    console.log(`TItulo: ${videojuego.titulo} | Precio: ${videojuego.precio} €`)
);
// c) Obtener y ordenar los videojuegos disponibles del género
const disponible = videojuegoJS.filter(videojuego => videojuego.disponible).sort((a, b) => b.precio - a.precio);
console.log(disponible);

// d) Comprobar si algún videojuego disponible supera los 50 €
const superiorPrecio = videojuegoJS.filter(videojuego => videojuego.precio > 50);
console.log(superiorPrecio);

// EJERCICIO 4. Validación de jugadores
// a) Definir la función validarJugador(jugador) mediante promesas
// b) Rechazar la promesa indicando todos los motivos
// c) Gestionar el resultado con async/await y try/catch
// d) Probar un jugador válido y otro que incumpla ambas condiciones
