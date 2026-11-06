const videojuegos = [
    { nombre: "Zelda", precio: 60 },
    { nombre: "Minecraft", precio: 30 },
    { nombre: "FIFA", precio: 50 },
    { nombre: "Hades", precio: 25 }
];
/**
 * Calcula:
 * El precio total.
 * El precio medio.
*/

const precioT = videojuegos.reduce((acumulador, videojuego) => 
    {return acumulador + videojuego.precio} , 0);
console.log(precioT);
console.log(precioT/ videojuegos.length);