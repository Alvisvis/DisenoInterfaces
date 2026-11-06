const misiones = [
    { nombre: "Marte", presupuesto: 800, completada: false },
    { nombre: "Luna", presupuesto: 300, completada: true },
    { nombre: "Europa", presupuesto: 1200, completada: false },
    { nombre: "Titán", presupuesto: 600, completada: true }
];

//a) Cuenta las misiones pendientes.

const misionesIncompletas = misiones.filter(mision => mision.completada == false).map(mision => mision.nombre);
console.log("Las misiones completadas son:", misionesIncompletas);

//b) Calcula el presupuesto total de las misiones pendientes.

//c) Comprueba si alguna misión supera los 1.000 millones.
//d) Crea un array con el nombre y presupuesto de las misiones pendientes, ordenado de mayor a menor presupuesto.

