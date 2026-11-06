const edades = [15, 16, 17, 20, 22];

const esMayor = edades.some(edad => edad > 18);
if (esMayor == true) {
    console.log("Si hay mayores");
}
