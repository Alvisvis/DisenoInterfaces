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
console.log(nivelJugador(2));

const nivelJugadorFlecha = (puntuacion) => {
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
console.log(nivelJugadorFlecha(8));