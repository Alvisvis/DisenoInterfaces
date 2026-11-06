let name = "Pilar";

function printName() {
    console.log(name); //tacha la variable name y pone que es deprecated pero lo ejecuta porque el hijo puede acceder a la variable global
}
printName();


/*ÁMBITO LOCAL DE FUNCIÓN*/
function printLastName() {
    let lastname = "gonzalez";
}
printLastName();
console.log(name);  //error lastname no está definido porque la variable lastname es de ámbito local a la función

/*ÁMBITO LOCAL DE BLOQUE*/
function printAddress() {
    let lastname = "gonzalez";
    if (lastname == "gonzalez") {
        let address = "Velazquez";
    }
    console.log(address);  //error address no está definido. Si defino la variable en el padre sí podría acceder
}
printAddress();

if (true) {
    let text = "Hola y adiós";
}
console.log(text);
