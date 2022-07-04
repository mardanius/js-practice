// Concatenating Strings with Plus operator.

let str1 = "Hola ";
let str2 = " soy ";
let str3 = " Dani ";

console.log(str1 + " " + str2 + " " + str3);

let first = str1 += str2;

console.log(first += str3 + " y soy programador");

// Find the length

let nombre = "Mario";
nombre[0] = "L"; // Strings are inmutable, individual characters can't be changed.

// Get the last character
console.log(nombre[nombre.length - 3]);

// Arrays

let family = ["Mario", "Miriam", ["Dario", "Leti", "Lucas","Mateo"], "Dani", "Hugo", "Leo"];

console.log(family[2][3]);

family.push("Ale");
let poped = family.pop(); // Delete the last element of an array. Note, that element can be send in a variable too.
family.unshift("Claudia");
let removed = family.shift();

console.log(family);
console.log("Members removed " + poped + " and " + removed);

// Variables and Scope
var a = "e";
function testScope(){
    var a = "a";
    return a;
}
console.log(testScope());
console.log(a);

// Return

let respuesta = suma(5, 3);
console.log(respuesta);

function suma(num1, num2){
    let result = num1 + num2;
    return result;
}
// Switch


function opciones(op) {
    let result = "";
    switch (op) {
        case 1:
            /*result = "First Opcion";
            break;*/
        case 2:
            /*result = "Second Opcion";
            break;*/
        case 3:
            result = "1, 2 and 3 Opcion";
            break;
        default:
            result = "Other Option"
    }

    return result;
}

console.log(opciones(2));

// More practice with switch

let rojo;
let amarillo;
let verde;

let max = 3;
let min = 1;

let random = Math.floor(Math.random() * (max - min + 1)) + min;

function conductor(colorSemaforo) {
    switch (colorSemaforo){
        case 1:
            console.log("Red, I have to Stop");
            break;
        case 2:
            console.log("Yellow, OK, get Ready");
            break;
        case 3:
            console.log("Green, let's Go!");
            break;
    }
}
conductor(random)

// Returning Boolean values from functions

let a;
let b;

function boolean(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
};

console.log(boolean(1,1)); 
console.log(boolean(1,2));

// Another way to do this is:

function boolean2(a, b) {
    return a === b;
}
console.log(boolean2(2, 2));
console.log(boolean2(2, 3));


// Objects

let prop = "tail";

let michi = {
    name: "Michi",
    "number legs": 4,
    tail: 1
}

michi.lastName = "Gatito";  
delete michi.tail;

console.log(michi);
console.log(michi["number legs"]);
console.log(michi[prop]);

// Using Objects for lookup

let max = 10;
let min = 1;

let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

let abc = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
}

function updateABC (nuevaLetra) {
    if (abc.hasOwnProperty(nuevaLetra) == false){
        switch (nuevaLetra) {
            case 6:
                letra = "f";
                break;
            case 7:
                letra = "g";
                break;
            case 8:
                letra = "h";
                break;
            case 9:
                letra = "i";
                break;
            case 10:
                letra = "j";
                break;
        }
        abc[nuevaLetra] = letra;
    } else {
        console.log("The number is already an object prop")
    }
}

function cargar(){
    let count = 0;
    for (let properties in abc) {
        count = count + 1;
    }
    while (count < 10) {
        updateABC(numeroRandom);
    }
}

cargar();

console.log(abc);




















