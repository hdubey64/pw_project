// Traditional Function Synt
function add(a, b) {
   return a + b;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function greet(name) {
   console.log("Hello, " + name + "!");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function multiply(a, b) {
   const result = a * b;
   return result;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function square(number) {
   return number * number;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arrow Function Synt
const add1 = (a, b) => {
   return a + b;
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const greet2 = (name) => console.log("Hello, " + name + "!");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const multiply2 = (a, b) => {
   const result = a * b;
   return result;
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const square2 = (number) => number * number;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const square3 = (x) => x * x;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const sumOftwoNumber = (x, y) => x + y;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const sum = (x, y) => {
   console.log(`Adding ${x} and ${y}`);
   return x + y;
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const sumAndDiffrence = (x, y) => ({ Sum: x + y, Deffrence: x - y });

//Calling function

let output1 = square(5);
let output2 = sumOftwoNumber(5, 10);
let output3 = sum(1, 5);
let output4 = sumAndDiffrence(5, 15);

console.log(output1);
// 25

console.log(output2);
// 15

console.log(output3);
// 6

console.log(output4);
// { Sum: 20, Deffrence: -10 }
