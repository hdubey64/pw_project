let arr = ["vishal", "Shashank"];
let arr1 = ["vishal", "Shashank"];
// arr.pop();
let result = arr.concat(arr1);
console.log(arr);
console.log(result);

//+++++++++++++++++++++++++++++++++++++++++
//009
let sum = 0;
let arr2 = [10, 20, 50, 30];
arr2.forEach(function myFunctio(element) {
   sum = sum + element;
});

console.log(sum);

//+++++++++++++++++++++++++++++++++++++++++
//013

// console.log(arr2.indexOf(10));

// function greet(name) {
//    console.log("Hello, " + namef);
// }

// greet("John");

//+++++++++++++++++++++++++++++++++++++++++
//031

let obj = { name1: "Vishal", name2: "Shashank" };
let obj2 = { name1: "Vishal", name2: "Shashank" };
let result2 = obj.joinObjects(obj2);
