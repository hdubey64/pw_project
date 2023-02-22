// Values
// Values

// 7 => int
// 8.1 => Float
// Number

// 'Anurag'
// "Anurag"
// String

// true or false
// Boolean values

// Null
// undefined

// Prmitive Datatype
// Single value

// Non - Primitive values => Multi values
// array => [] => index
// Object => {} => Key:Value

// ["A", "B", "C", "D", "E", "F","G"];
// {}

// Variables

// var
// let
// const

// let number = 2510;

// let number2 = 34;
// console.log(number);

// console.log(number2);

// Assignment Operator
let a = "25";
let b = "25";
let c = 50;

// Arithmetic Operator

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// console.log(3 ** 4);

// Comparision OP

// ==
// ===
// console.log(a === b);

// let value1 = true;
// let value2 = false;
// let value3 = true;
// let value4 = false;
// console.log(value1 && value3);

//

// * * * * * * * * * * * * * * *
// * * * If else statement * * *
// * * * * * * * * * * * * * * *

// let age = 17;

// if (age >= 18) {
//    console.log("Your are Eligiable to Vote");
// } else {
//    console.log("Sorry!, Your are not Eligiable to Vote");
// }

// let signal = "Green";

// if (signal == "Red") {
//    console.log("STOP ❌");
// } else if (signal == "Yellow") {
//    console.log("Go Slow 🐌");
// } else if (signal == "Green") {
//    console.log("Go Fast ⏩");
// } else {
//    console.log("Inavlid 🐜");
// }

// * * * * * * * * * * * * * *
// * * * Switch Statment * * *
// * * * * * * * * * * * * * *

// let user = "Vishal";

// switch (user) {
//    case "Admin":
//       console.log("He is Admin");
//       break;
//    case "Student":
//       console.log("He is Student");
//       break;
//    case "Mentor":
//       console.log("He is Mentor");
//       break;
//    default:
//       console.log("I am Default");
// }

// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * Check if the given number is even or odd. * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

// let num = 411;

// if (num === "0") {
//    console.log(`${num} is not a odd number nor even number`);
// } else if (num % 2 == "0") {
//    console.log(`${num} is even number`);
// } else {
//    console.log(`${num} is odd number`);
// }

// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * *For Loop * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

// for (let i = 0; i <= 5; i++) {
//    console.log(i);
// }

// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * Print 3 times "Pw Skills" * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

// for (let index = 0; index < 3; index++) {
//    console.log("PW Skill");
// }

// * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * Display a sequence of even numbers till 20  * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// for (let i = 2; i <= 20; i += 2) {
//    console.log(i);
// }

// * * * * * * * * * * * * * * * * * * *
// * * * * * * * NesteďLoop  * * * * * *
// * * * * * * * * * * * * * * * * * * *

// let matrix = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
// ];
// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//    for (let j = 0; j < matrix[i].length; j++) {
//       sum += matrix[i][j];
//    }
// }

// console.log(sum); // Output: 45

// let myArray = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
// ];
// let sum2 = 0;

// for (let i = 0; i < 2; i++) {
//    for (let j = 0; j < 2; j++) {
//       sum2 += myArray[i][j];
//    }
// }
// console.log(sum2); // Output: 12 (1, 2, 4, 5)

// * * * * * * * * * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * * *
// * * * Write a code  to show the inner loop value for each outer itretion in* * * *
// * * * * *in itretion in  outer itretion in along with outer "for" lop  * * * * * *
// * * * * * * * * * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * * *

// for (let i = 1; i <= 3; i++) {
//    console.log("For i = " + i + "  the inner loop value are");

//    for (let j = 1; j < 3; j++) {
//       console.log("j = " + j);
//    }
// }
