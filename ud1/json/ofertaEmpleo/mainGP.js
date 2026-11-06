
const fs = require('fs');
const readline = require('readline');

// Leer el archivo JSON
const datos = fs.readFileSync('oferta.json', 'utf8');
const ofertas = JSON.parse(datos);

// Crear la entrada por teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// a) Filtrar ofertas por sector
function filtrarPorSector(ofertas, sector) {
    return ofertas.filter(oferta =>
        oferta.sector.toLowerCase() === sector.toLowerCase()
    );
}

// b), c) y d) Consultar las ofertas
function consultarOfertas(ofertas, sector) {

    const ofertasSector = filtrarPorSector(ofertas, sector);

    // Mostrar empresa y salario
    if (ofertasSector.length > 0) {
        console.log("\nOfertas encontradas:");

        ofertasSector.forEach(oferta => {
            console.log("Empresa: " + oferta.empresa);
            console.log("Salario: " + oferta.salario + " € anuales");
            console.log("-------------------------");
        });

    } else {
        console.log("No hay ofertas para ese sector.");
    }

    // c) Crear un nuevo array con ofertas activas
    const ofertasActivas = ofertasSector
        .filter(oferta => oferta.activa === true)
        .sort((a, b) => b.salario - a.salario);

    console.log("\nOfertas activas ordenadas por salario:");

    if (ofertasActivas.length > 0) {
        ofertasActivas.forEach(oferta => {
            console.log(
                oferta.empresa + " - " + oferta.salario + " €"
            );
        });
    } else {
        console.log("No hay ofertas activas en este sector.");
    }

    // d) Comprobar si alguna oferta activa supera 35.000 €
    const salarioAlto = ofertasActivas.some(
        oferta => oferta.salario > 35000
    );

    if (salarioAlto) {
        console.log(
            "\nHay alguna oferta activa que supera los 35.000 €."
        );
    } else {
        console.log(
            "\nNinguna oferta activa supera los 35.000 €."
        );
    }
}

// Solicitar el sector al usuario
rl.question("Introduce el sector profesional: ", (sector) => {

    consultarOfertas(ofertas, sector.trim());

    rl.close();
});
