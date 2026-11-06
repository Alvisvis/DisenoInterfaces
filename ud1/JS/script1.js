/*
let suma = sumFunc(3, 4);
 console.log(suma);

 function sumFunc(a, b) {
     return a + b;
 }

//EJEMPLOS DE CASTINGS
let currentYear = "2026";
currentYear = String(currentYear);
console.log(typeof (currentYear));
currentYear = Number(currentYear);
console.log(typeof (currentYear));

currentYear = null;
console.log(typeof (currentYear));
currentYear = undefined;
console.log(typeof (currentYear));

let nae = "Alvis";
console.log("Hola + name");

 

//Funciones Anonimas
let result = function(name="Alvis", year=2024){
    let copyright = name + " - " + year;
    return copyright;
};
console.log(result());

//Funciones CALLBACKS
let result2 = function (name, year, formatter) {
    let copyright = formatter(name, year);
    return copyright;
}
let formatter = function (name, year) {
    return name + " | " + year;
}
console.log(result2("DAM2", 2025, formatter));

//FUNCIONES AUTO.INVOCADAS
(function(name, year){
    console.log(name, year);

})("DAM", 2026);
*/

//FUNCIONES ARROW(LAMBDA)
function suma(a,b)
{
    return a+b;
}
const sum = (a,b) => {
    return a+b;
}

//FUNCIONES ARROW(LAMBDA) PERO SOLO 1 LINEA
const sum3 = (a,b) => a+b;