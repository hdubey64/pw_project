// // function createPromise() {
// //    return new Promise(function exec(resolve, reject) {
// //       // your code goes here
// //       setTimeout(function () {
// //          console.log("Timer Done");
// //          resolve("10");
// //       }, 3000);
// //    });
// // }

// // async function consume() {
// //    try {
// //       console.log("Inside Function");
// //       const response = await createPromise();
// //       console.log("response is", response);
// //    } catch (error) {
// //       console.log("handled", err);
// //    }
// // }

// // console.log("Start");
// // consume();
// // console.log("End");

// function createPromise() {
//    return new Promise(function exec(resolve, reject) {
//       // your code goes here
//       setTimeout(function () {
//          console.log("Timer Done");
//          reject("10");
//       }, 3000);
//    });
// }

// async function consume() {
//    try {
//       console.log("Inside Function");
//       const response = await createPromise();
//       console.log("response is", response);
//    } catch (err) {
//       console.log("handled", err);
//    }
// }

// console.log("Start");
// consume();
// console.log("End");

fetch("http://type.fit/api/quotes")
   .then(function f(response) {
      return response.json();
   })
   .then(function f(value) {
      console.log(value);
   });
