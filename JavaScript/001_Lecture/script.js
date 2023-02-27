/*Create a javascript file, using javascript comments, List all the datatypes of Jaascript, and specify an
 example for each of them.
//001 String
let greeting = "Hello there my self Vishal Dubey";
//002 Number:-
let num1 = 10;
let num2 = 9;
let num3 = 25.55;
let nu4 = NaN;
let num5 = Infinity;
//003 Big Int
let num = BigInt(1415439765149862645415);
//004 Boolean
let isLoggedIn = true;
let isLoggedOut = false;

//005 Unddefined
let x;

//006 null
let y = null;

//007 Symbol
let z = symbol("mysymbol");

//008 Object
let myArray = [10, 50, vishal, 10.5, true];
let myObj = {
   firstName: Vishal,
   lastName: Dubey,
};

/*
 Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
 
    let myCratList = {
        "Lenovo ideapad Gaming 3 rtx 3050",
        "iphone",
        "RedGear keybord",
        "Xp-penTab",
        "Ramsons Exitica",
        "Real me neo 3",
        "Saffola Oats",
        "Mivi Fort s60",
        "Boat 1000",
        "Pw Full Skill Web Development"

    }

 */

/*
3. Create an object of a student registry of 5 students whose key is the registration number and the 
    value is the student name. Registration number starts from 1 and continues.
let stutentData = {
   001: "Vishal Dubey",
   002: "Ratnesh Yadav",
   003: "Shashank Dubey",
   004: "Pradeep Yadav",
   005: "Sandeep Singh",
};
*/
/* Specify an example for all the datatypes in Javascript, store the values in a variable, and  
    verify the type ofvalue stored.

//001 String
let greeting = "Hello there my self Vishal Dubey";
consol.log(typeof greeting);

//002 Number:-
let num = 10;
let num2 = 9;
let num3 = 25.55;
let nu4 = NaN;
let num5 = Infinity;
consol.log(typeof num);
consol.log(typeof num2);
consol.log(typeof num3);

//003 Big Int
let num6 = BigInt(1415439765149862645415);
consol.log(typeof num);

//004 Boolean
let isLoggedIn = true;
let isLoggedOut = false;
consol.log(typeof isLoggedIn);

//005 Unddefined
let x;
consol.log(typeof x);

//006 null
let y = null;
consol.log(typeof y);

//007 Symbol
let z = symbol("mysymbol");
consol.log(typeof z);

//008 Object
let myArray = [10, 50, "vishal", 10.5, true];
let myObj = {
   firstName: "Vishal ",
   lastName: " Dubey",
};
consol.log(typeof myArray);
consol.log(typeof myObj);
*/

/*
2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results
   and error messages.
    // Valid Variable 
    let num = 50;
    console.log(num); // Output:- 50

    let myArray = [10, 50, "vishal", 10.5, true];
    console.log(myArray); // Output:- [ 10, 50, 'vishal', 10.5, true ]


    // Invalid Variable  
    let 1stnum = 50;
    console.log(num); // Output:- SyntaxError: Invalid or unexpected token

    let 2ndArray = [10, 50, "vishal", 10.5, true];
    console.log(myArray); // SyntaxError: Invalid or unexpected token
*/

/*
1. Write a program that prints the multiplication table in the textbook format of any number specified.


let num = 5;
console.log(`${num} * 1 = ${num * 1}`);
console.log(`${num} * 2 = ${num * 2}`);
console.log(`${num} * 3 = ${num * 3}`);
console.log(`${num} * 4 = ${num * 4}`);
console.log(`${num} * 5 = ${num * 5}`);
console.log(`${num} * 6 = ${num * 6}`);
console.log(`${num} * 7 = ${num * 7}`);
console.log(`${num} * 8 = ${num * 8}`);
console.log(`${num} * 9 = ${num * 9}`);
console.log(`${num} * 10 = ${num * 10}`);

// Output

5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

/*  Write a program to perform all the arithmetic operations[except increment and decrement operators] of
    javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

let num1 = 15;
let num2 = 11;

//  Sum Of 2 Numbers
console.log(`Sum of num1 and num2 is:- ${num1 + num2}`);
//  Output:-Sum of num1 and num2 is:- 26

//  Subtraction Of 2 Numbers
console.log(`Subtraction of num1 and num2 is:- ${num1 - num2}`);
//  Output:-Subtraction of num1 and num2 is:- 4

//  Multiplication Of 2 Numbers
console.log(`Multiplication of num1 and num2 is:- ${num1 * num2}`);
//  Output:-Multiplication of num1 and num2 is:- 165

//  Division Of 2 Numbers
console.log(`Division of num1 and num2 is:- ${num1 / num2}`);
//  Output:-Division of num1 and num2 is:- 1.36363636363635

//  Remainder Of 2 Numbers
console.log(`Remainder of num1 and num2 is:- ${num1 % num2}`);
//  Output:-Remainder of num1 and num2 is:- 4

//  Exponent (**) Of 2 Numbers
console.log(`Exponent (**) of num1 and num2 is:- ${num1 ** num2}`);
//  Output:-Exponent (**) of num1 and num2 is:- 8649755859375
*/

/*  Write a program to find out the perimeter of a rectangle. Print the results to the console.
 

let rectangleLenght = 10;
let rectangleWidth = 15;

let rectangleParameter = 2 * (rectangleLenght + rectangleWidth);

console.log(`Rectangle Parameter is:-${rectangleParameter}`);
// Output:- Rectangle Parameter is:-50
*/

/*  Write a program to demonstrate the results of comparison operators. Note that both the truth and 
    falsecondition for each operator must be specified.

//  Equal
let num1 = 2;
let num2 = 2;
console.log(num1 == num2);
//  Output: true

let num3 = 2;
let num4 = 3;
console.log(num3 == num4);
//  Output: false

//  Not Equal
let num5 = 3;
let num6 = 3;
console.log(num5 != num6);
//  Output: false

let num7 = 7;
let num8 = 8;
console.log(num7 != num8);
//  Output: true

//  Strictly Equal
let num9 = 9;
let num10 = 9;
console.log(num9 === num10);
//  Output: true

let num11 = 9;
let num12 = "9";
console.log(num11 === num12);
//  Output: false

//  Grater Than Equal to
let num13 = 10;
let num14 = 9;
console.log(num13 > num14);
//  Output: true
console.log(num13 >= num14);
//  Output: true

let num15 = 9;
let num16 = 10;
console.log(num15 > num16);
//  Output: false
console.log(num15 >= num16);
//  Output: false

//  Lesser Than and Equal to
let num17 = 10;
let num18 = 11;
console.log(num17 < num18);
//  Output: true
console.log(num17 <= num18);
//  Output: true

let num19 = 12;
let num20 = 11;
console.log(num19 < num20);
//  Output: false
console.log(num19 <= num20);
//  Output: false
*/
/*   Write a program of traffic control that accepts the traffic light displayed and prints the message.
    if the traffic light is red print the vehicles must stop.


let trafficLight = "red";

if (trafficLight == "red") {
   console.log("Stop");
   // Output:-Stop
} else if (trafficLight == "yellow") {
   console.log("Wait");
   // Output:-Wait
} else if (trafficLight == "green") {
   console.log("Go");
   // Output:-Go
} else {
   console.log("No Signal");
   // Output:-Signal
}
*/

/*  2. Write a program to print the largest of 2 numbers.

num1 = 25;
num2 = 20;

if (num1 > num2) {
   console.log(`Num1 is grater than num2`);
} else {
   console.log(`Num2 is grater than num1`);
}
*/
/*  Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it 
    is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5. 

let num = 28;
if (num % 3 == 0 && num % 5 == 0) {
   console.log("FizzBuzz");
} else if (num % 5 == 0) {
   console.log("Buzz");
} else if (num % 3 == 0) {
   console.log("Fizz");
} else {
   console.log("Invalid Input");
}
*/

/*  1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the 
    number ofdays until the weekend.

let day = "Mon";

switch (day) {
   case "Mon":
      console.log("There are 5 days until the weekend");
      break;
   case "Tue":
      console.log("There are 4 days until the weekend");
      break;
   case "Wed":
      console.log("There are 3 days until the weekend");
      break;
   case "Thu":
      console.log("There are 2 days until the weekend");

      break;
   case "Fri":
      console.log("There are 1 days until the weekend");

      break;
   case "Sat":
      console.log("There are 0 days until the weekend");

      break;
   case "Sun":
      console.log("There are 0 days until the weekend");
      break;
   default:
      console.log("Your Input is invalid plese enter a valid name of  a day");
      break;
}
*/

/*  Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the
year.

let numberOfMonth = "10";

switch (numberOfMonth) {
   case "1":
      console.log("1st Month of year name is January");
      break;
   case "2":
      console.log("2nd Month of year name is February");
      break;
   case "3":
      console.log("3rd Month of year name is March");
      break;
   case "4":
      console.log("4th Month of year name is April");

      break;
   case "5":
      console.log("5th Month of year name is May");

      break;
   case "6":
      console.log("6th Month of year name is June");

      break;
   case "7":
      console.log("7th Month of year name is July");
      break;
   case "8":
      console.log("8th Month of year name is August");
      break;
   case "9":
      console.log("9th Month of year name is Septamber");
      break;
   case "10":
      console.log("10th Month of year name is Octuber");
      break;
   case "11":
      console.log("2nd Last Month of year name is November");
      break;
   case "12":
      console.log("Last Month of year name is December");
      break;
   default:
      console.log("Invalid Input");
      break;
}
*/

/*1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.

let num = 1;

num == 0
   ? console.log("num is 0 not a postive number nor a negative number")
   : num > 0
   ? console.log("Num is a positive number")
   : console.log("Num is a negative number");
*/

/* Create a program that takes in two numbers and prints the larger one.

num1 = 100;
num2 = 100;

num1 == num2
   ? console.log(`Both the number num1 ${num1} and num2 ${num2} are equal`)
   : num1 > num2
   ? console.log(`The larger no. is ${num1}`)
   : console.log(`The larger no. is ${num1}`);
   */

/*  Write a program that generates the multiplication table in the textbook format for a given number. */

num = 13;
for (let i = 0; i <= 10; i++) {
   console.log(`${num} * ${i} = ${i * num}`);
}
/*
//Output
13 * 0 = 0
13 * 1 = 13
13 * 2 = 26
13 * 3 = 39
13 * 4 = 52
13 * 5 = 65
13 * 6 = 78
13 * 7 = 91
13 * 8 = 104
13 * 9 = 117
13 * 10 = 130
*/
/*
 Write a program that prints all the positive even numbers till the number specified. 

let num = 12;
for (let i = 1; i <= num; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}
Output 
2
4
6
8
10
12
*/
