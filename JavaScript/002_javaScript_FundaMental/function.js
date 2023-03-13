// function greet(num) {
//    // console.log(`hello, ${name}!`);
//    for (let i = 1; i <= 10; i++) {
//       console.log(`${num} * ${i} = ${num * i}`);
//    }
// }

// greet(6);

/* Function ko variable me store karna */

// const storeInVariable = function (name) {
//    console.log(`Hello, ${name}!`);
// };
// storeInVariable("Vishal");
// console.log(typeof storeInVariable);

/* Function ko dusre function me store karna */

// function sum(a, b) {
//    return a + b;
// }
// function operation(fn, a, b) {
//    return fn(a, b);
// }

// console.log(operation(fn, 2, 3));
// console.log(sum);
// console.log(operation);

/* Function ko dusre function me return karna */

// function multiplyBy(facter) {
//    return function (num) {
//       return num * facter;
//    };
// }

// const multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(5));
// console.log(multiplyByTwo);
// console.log(multiplyBy);

// Function without parmeter & return

// function myfunction() {
//    console.log("Hello Vishal ");
// }
// myfunction();

// function myfunctionTwo() {
//    return 4 * 5;
// }
// const myVariable = myfunctionTwo();

// console.log(myfunctionTwo);
// console.log(myVariable);

// function myfunctionTwo() {
//    return console.log(4 * 5);
// }

// myfunctionTwo();
// const myVariable = myfunctionTwo();

// console.log(myfunctionTwo);
// console.log(myVariable);

/* Function ke reture value ko ek Variable me store karna  */

// function myfunctionThree() {
//    return "Hello Vishal";
// }

// let myVariableTwo = myfunctionThree();

// console.log(myVariableTwo);
// console.log(myVariableTwo);
// console.log(`${myVariableTwo} How are you....!`);

// console.log(typeof myVariableTwo);

/* Function with single parameter */

// function squre(num) {
//    let result = num * num;
//    console.log("Squre of " + num + " is " + result);
// }

// squre(10);

/* Function with default parameter */

// function greet(name = "User", greeting = "Hello") {
//    console.log(`${greeting}, ${name}`);
// }

// // Calling Function with both parameter

// greet("Vishal", "Hi");

// // Calling Function with Only Name parameter
// greet("Vishal");

// // Calling Function without parameter

// greet();

// function add(a, b) {
//    return a + b;
// }

// console.log(add(5, 10));

// function add(c, d) {
//    return c + d;
// }

// console.log(add(6));

// function add(e, f = 10) {
//    return e + f;
// }

// console.log(add(7));

// function add(g = 10, h = 10) {
//    return g + h;
// }

// console.log(add(8));

// function add(i = 10, j = 10) {
//    return i + j;
// }

// console.log(add(9, 10));

// function add(k = 10, l = 10) {
//    return k + l;
// }

// console.log(add());

// Function with Array Parameter

// function printArrayElements(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//    }
// }

// const myArray = ["apple", "banana", "orange"];
// printArrayElements(myArray);

// function sumOfTwoNumber([num1, num2, num3]) {
//    return num1 + num2;
// }

// let numbers = [10, 40];

// let results = sumOfTwoNumber(numbers);

// console.log(results);

// Function with Unlimited Parameter

// function addnumbers(...numbers) {
//    let sum = 0;
//    for (let number of numbers) {
//       sum += number;
//    }
//    return sum;
// }
// console.log(addnumbers(1, 2, 3, 4, 5, 6));

// function sumOfAllParameters() {
//    let sum = 0;
//    for (let i = 0; i < arguments.length; i++) sum += arguments[i];
//    return sum;
// }

// let result = sumOfAllParameters(1, 2, 3, 4, 5, 6);
// console.log(result);
