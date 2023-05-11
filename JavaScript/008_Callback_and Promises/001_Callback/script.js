function h(x, fn) {
   // h -> is HOF
   // fb -> Callback
   console.log(x * x);
   fn(x * x);
}

// h(10, function () {
//    console.log("done with callback");
// });

// h(10, exec);
// function exec(n) {
//    console.log("Squared value is undefine", n);
// }
console.log("Start");
setTimeout(function f() {
   console.log("timer done 1");
}, 500);
setTimeout(function f() {
   console.log("timer done 2 ");
}, 499);
console.log("End");
for (let i = 0; i < 50000000; i++) {}
