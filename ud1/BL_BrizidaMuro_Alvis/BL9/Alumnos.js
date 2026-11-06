const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 10 },
    { nombre: "Carlos", nota: 6 }
];

// a) Mostrar los nombres de todos los alumnos
const nombres = alumnos.map(alumno => alumno.nombre);
console.log(nombres);

// b) Comprobar si algún alumno tiene un 10
const el10 = alumnos.find(alumno => alumno.nota === 10 );
console.log("La que tiene un 10 es:", el10);

//c) Obtener los alumnos aprobados.
const aprobados = alumnos.filter(alumno => alumno.nota >= 5).map(alumno => alumno.nombre);
console.log("Los alumnos aprobados son:", aprobados);

//d) Obtener los alumnos suspensos.
const suspensos = alumnos.filter(alumno => alumno.nota < 5).map(alumno => alumno.nombre);
console.log("Los alumnos suspensos son:", suspensos);