function crearVideojuego(nombre, precio, ...genero){
    return {
        nombre: nombre,
        precio: precio,
        genero: genero
    };
}

const videojuego1 = crearVideojuego(
    "Minecraft",
    "45€",
    "Construccion",
    "Femenino",
    "Supervivencia");

console.log(videojuego1);