/*const usuario = {
    nombre: "Ana",
    edad: 20,
    ciudad: "Londres"
};

const usuarioJSON = JSON.stringify(usuario);

console.log(usuario);
console.log(usuarioJSON);
console.log(typeof(usuarioJSON));

//JSON a objeto JS
const datosJSON = `
{
    "nombre": "Alvis",
    "edad": 18,
    "curso": "DAM"
}
`;

const usuario2 = JSON.parse(datosJSON);

console.log(datosJSON);

console.log(usuario2.nombre);
console.log(usuario2.edad);
console.log(usuario2.curso);
*/

const productos = [
{
    nombre: "Teclado",
    precio: 30
},
{
    nombre: "Monitor",
    precio: 180
},
{
    nombre: "Ratón",
    precio: 20
}
]

const productosJSON = JSON.stringify(productos);
console.table(productosJSON);

const productosJS = JSON.parse(productosJSON);


