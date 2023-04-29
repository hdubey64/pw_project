// const oneArray = [1, 2, 3, 4, 5, 6];
// const twoArray = [7, 8, 9, 10, 11, 12];

// const threeArray = oneArray.concat(twoArray);
// const fourArray = [oneArray, twoArray];
// // console.log(threeArray);
// // console.log(threeArray.length);
// // console.log(fourArray);
// // console.log(fourArray.length);
// // console.log(...oneArray, ...twoArray);

// // Add two array in an array using of spread Oprater

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// let margedArray = [...arr1, ...arr2];

// console.log(margedArray);

// // Add an element in an array using of spread Oprater

// let nweArray = [...margedArray, 7];
// console.log(nweArray);

// // Add a property in an object using of spread Oprater

// const obj = {
//    name: "Vishal",
//    age: "26",
// };
// const newObj = { ...obj, city: "Lucknow" };
// console.log(newObj);

// // Pass an argument in a function using of spred operator

// const addNumbers = (a, b, c) => {
//    return a + b + c;
// };

// const nums = [1, 2, 3];

// console.log(addNumbers(...nums));

// // Double the all element in an array using of spread Oprater & map

// const doubleValueOfArray = [...margedArray.map((num) => num * 2)];
// console.log(doubleValueOfArray);

// //Delete some element in an array

// const remainingElement = [
//    ...doubleValueOfArray.slice(0, 2),
//    ...doubleValueOfArray.slice(4, 7),
//    ...doubleValueOfArray.slice(8),
// ];

// console.log(remainingElement);

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const string = "Vishal";
// const string2 = [...string];
// console.log(string2);
// console.log(typeof string2);

// Rest Opretors

// function printAnArray() {
//    let array = Array.from(arguments);
//    let finalArray = array.map((e) => e);

//    console.log(finalArray);
// }

// function printAnArray2(...args) {
//    let finalArray = args.map((e) => e);
//    console.log(finalArray);
// }
// printAnArray(1, 2);
// printAnArray(1, 2, 3, 4, 5, 6);

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["Vishal", "Raj"];
const newNames = ["Shashank", ...names, "Ashutosh"];
console.log(newNames);

const siteName = "pwSkills";

console.log(...siteName);

const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj };
console.log(copiedObj);

function myFunc(a, b, ...myArgs) {
   console.log(a); // Output: 1
   console.log(b); // Output: 2
   console.log(myArgs); // Output: [3, 4, 5]
}

function pwSkills(...Raj) {
   return Raj;
}

console.log(pwSkills("Vishal", "Monu"));
