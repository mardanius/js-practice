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

// For Loops

const ourArray = [];

for (let i = 0; i <= 5; i++) {
  ourArray.push(i);
}

console.log(ourArray);

// While loops

let ourArray2 = [];
let j = 0;

while (j < 5) {
    ourArray2.push(j);
    j++;
}

console.log(ourArray2);

// Iterate through an array

let myArr = [10,9,8,7,6,[5,4,3,2,1]];

for (let i = 0; i < myArr.length - 1; i++) {
    console.log(myArr[i]);

    if (myArr.length - 1) {
        for (let j = 0; j < myArr[i].length; j++) {
            console.log(myArr[i][j]);
        }
    }
}

// Random Fractions

function randomFraction() {
    let arr = [];
    let n = 0;
    do {
        arr.push(Math.random() * 50); // Generates decima numbers
        //arr.push(Math.floor(Math.random() * 5));
        n++;
    } while (n < 5)
    return arr;
}

console.log(randomFraction());

// Random within a range


function randomFraction() {
    let arr = [];
    let n = 0;
    do {
        arr.push(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
        n++;
    } while (n < 5)
    return arr;
}

console.log(randomFraction());


// Normal if statement

function ask(a, b) {
    if (a > b) {
        return a + " es mayor a " + b;
    } else {
        return a + " es menor a " + b;
    }
}

console.log(ask(3, 5));

// Using Ternary Operator

function ask2(a, b) {
    return a > b ? a + " es mayor que " + b : a + " es menor que " + b;
}
console.log(ask2(18, 12));
console.log(ask2(13, 125));

// Using multiple ternary Operator

function ask3(a, b) {
    return (a > b) ? `${a} es mayor que ${b}`
    : (a == b) ? `${a} es igual a ${b}`
    : `${a} es menor que ${b}`;
}

// Using multiple ternary Operator and Arrow Function

let ask3 = (a, b = 1) => {
    return (a > b) ? `${a} es mayor que ${b}`
    : (a == b) ? `${a} es igual a ${b}`
    : `${a} es menor que ${b}`;
}

console.log(ask3(4));
console.log(ask3(5, 4));
console.log(ask3(4, 40));

// More of arrow functions

const sumar = (a,b) => a + b;
console.log(sumar(3,3));

// Scope of var and let

let compare1 = () => {
    let arr = [];
    for(let i = 0; i < 5; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(compare1());

// Rest Parameter   

const restPar = (...argumento) => `You have enter ${argumento.length} parameters.`;
console.log(restPar([0,1,2],"HOLA",true));

// Spread Operator

let arr = [15,3,55,38];

const maximo = Math.max(...arr);

console.log(maximo);

// Destructuring assignments in objects

let person = {
    name: 'Dani', 
    age: 31,
    pet: {
        petName: "Michi",
        legs: 4
    }
}

let { name: nombre, age: edad } = person;
let { pet : {petName: nombreMascota, legs: numeroPatas}} = person;

console.log(`${nombreMascota} have ${numeroPatas} legs`);
console.log(nombre);

// Destructuring assignments in arrays

let p = 1; let h = 20;
console.log([p,h] = [h,p]);
console.log(p);
console.log(h);

let array1 = ["a","b","c","d","e","f","g"];
[x, y,, z,...resto] = array1;
console.log(x, y, z);
console.log(resto);

console.log(array1);

// Destructuring assignment to pass and object as arguments

const personData = {
    name: "Sol",
    age: 24,
    field: "Engineering Student"
}
/*1 method
const updateProfile = (personData) => {
    const {name, age, field} = personData;
}*/
// Second Method using destructuring assignment

const updateProfile = ({ name, age, field }) => {
    
};


// Object Property shorthand

const position = (x, y) => ({x, y});
console.log(position(5,13));

// Concise declarative functions
// One way to write a method

const humano1 = {
    name: 'Wellington',
    age: 30,
    saludar: function(){
        return "Bom dia!"
    }
}

console.log(humano.saludar());

// Other way

const humano2 = {
    name: 'Wellington',
    age: 30,
    saludar() {
        return "Bom dia!"
    }
}

console.log(humano2.saludar());

// Array Splice

let myArr1 = [1,2,3,4,5,6,7,8,9];

myArr1.splice(0, 4);

console.log(myArr1);

// ternary operator
// normal if chain

function comparar(a,b) {
    if (a > b) {
        return `${a} es mayor que ${b}`;
    } else {
        return `${b} es mayor que ${a}`;
    }
}

console.log(comparar(30,5))

// Using ternary operator

function comparar2 (a,b){
    return a > b ? `${a} es mayor que ${b}` : `${b} es mayor que ${a}`;
}
console.log(comparar2(30,5))

// Splice: Delete

let numbers = [0,1,2,3,4,5,666,'fsddf'];
numbers.splice(6,2,6,7,8,9);
console.log(numbers);

// Slice and Spread Operator
    
let temp = ['cool', 'warm', 'sunny', 'windy'];

function summerInCali(temp) {
    let summerInCali = temp.slice(1,3);
    let allYearTemp = ['Impredecible',...temp];
    return `Summer ${summerInCali} All year ${allYearTemp}`;
}

console.log(summerInCali(temp));

// indexOf

let codes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function verify(arr,elem){
    if (codes.indexOf(elem) > 9) {
        return "El elemento está en la posición 10 para arriba";
    } else if (codes.indexOf(elem) == -1) {
        return "El elemento no está en el array";
    } else {
        return "El elemento está en la posición 10 para abajo";
    }
}

console.log(verify(codes,115));



