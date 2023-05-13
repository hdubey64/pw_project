// function createPromise() {
//    return new Promise(function exec(resolve, reject) {
//       // your code goes here
//       setTimeout(function () {
//          console.log("Timer Done");
// resolve("Done");
//       }, 3000);
//    });
// }

// console.log("Start");
// let x = createPromise();
// console.log("Got a new promise");
// x.then(function f() {
//    console.log("Promise Done");
// });
// console.log("End");
// for (let i = 0; i < 10000000; i++) {}

function createPromise() {
   return new Promise(function exec(resolve, reject) {
      // your code goes here
      setTimeout(function () {
         console.log("Timer Done");
         reject("Done");
      }, 3000);
   });
}

console.log("Start");
let x = createPromise();
console.log("Got a new promise");
x.then(function f(value) {
   console.log("Promise Done", value);
})
   .catch(function g(value) {
      console.log("hundled", value);
   })
   .finally(function () {
      console.log("Finally");
   });
console.log("End");
for (let i = 0; i < 10000000; i++) {}
