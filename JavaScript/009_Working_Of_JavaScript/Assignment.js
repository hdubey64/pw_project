// Q.1 Write a function called "addNumAer)" that take) two numAer) a) ar3ument) and return) their )um. 'all thefunction Aefore it i) declared to demon)trate hoi)tin3@

console.log(addNumbers(50, 20));

function addNumbers(a, b) {
   return a + b;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.2 Write a function called "multiplyNumber" that take two number as argument and return their product. use function expressions to define the function and call the function before it is  declared to demonstrate hoisting

console.log(multipleNumbers(50, 80));

let multipleNumbers = function (a, b) {
   return a * b;
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.3  Write a function that takes two number as arguments and returns their sum. Declare a variaAle inside the function using the var keyword and log its value to the console berfor it is assigned a value to demonstrate variaAle hoisting.

console.log(sum(60, 80));

function sum(a, b) {
   let result = a + b;
   return result;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.4 Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

console.log(a);
console.log(b);
console.log(c);

var a = 5;
let b = 10;
const c = 15;

console.log(a);
console.log(b);
console.log(c);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.5 Declare a variable using let inside a block )cope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

{
   console.log(d);

   let d = 50;

   console.log(d);
}
