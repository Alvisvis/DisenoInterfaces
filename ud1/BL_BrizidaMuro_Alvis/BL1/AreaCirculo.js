// Función tradicional
function areaCirculo(radio) {
    return Math.PI * radio * radio;
};
console.log(areaCirculo(5));

// Función flecha
const areaCirculoFlecha = (radio) => {
    return Math.PI * radio * radio;
};
console.log(areaCirculoFlecha(5));