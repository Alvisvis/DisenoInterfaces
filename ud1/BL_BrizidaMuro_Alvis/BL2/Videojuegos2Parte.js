const videojuegos = [
    { nombre: "Minecraft", puntuacion: 8 },
    { nombre: "Zelda", puntuacion: 10 },
    { nombre: "FIFA", puntuacion: 5 },
    { nombre: "Fortnite", puntuacion: 7 }
];

function nivelJugador(puntuacion) {
    if (puntuacion >= 0 && puntuacion <= 4) {
        return "Principiante";
    } else if (puntuacion <= 6) {
        return "Novato";
    } else if (puntuacion <= 8) {
        return "Experto";
    } else if (puntuacion <= 10) {
        return "Leyenda";
    } else {
        return "Puntuación no válida";
    }
};

videojuegos.forEach(juego => {
    console.log(`${juego.nombre}, ${juego.puntuacion}, ${nivelJugador(juego.puntuacion)}`)
});