//Const para poder leer el archivo json y poder preguntar
const fs = require("fs");
const readline = require("readline");

//Leer el archivo JSON
const contenido = fs.readFileSync("oferta.json", "utf8");
const ofertas = JSON.parse(contenido);

//Crear una interface para preguntar por teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//EMPIEZA EL EJERCICIO


//a) Define filtrarPorSector(ofertas, sector) para obtener las ofertas del sector indicado, sin distinguir entre mayúsculas y minúsculas.
function filtrarPorSector(ofertas, sector) {
    return ofertas.filter(oferta => 
        oferta.sector.toLoweCase() === sector.toLoweCase());
}
const ofertafiltrada = filtrarPorSector(ofertas, sector)
rl.question("Introduce el sector: ", sector => );

rl.close();
//b) Muestra la empresa y el salario de las ofertas encontradas. Si no hay resultados, informa de ello.

//c) Obtén un nuevo array con las ofertas activas del sector consultado, ordenadas de mayor a menor salario, sin modificar el array original.

//d) Comprueba si alguna oferta activa supera los 35.000 € anuales e informa del resultado