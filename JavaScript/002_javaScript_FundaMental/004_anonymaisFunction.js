// Anonymoud Function
let anonymousFunc = function () {
   console.log("Anonymous Function");
};

anonymousFunc();

//++++++++++++++++++++++++++++++++++++++++++++
// Immediately Invoke Function
(function immediatelyInvokeFunc() {
   console.log("Immediately Invoke Function");
})();

// Squre
(function square(x) {
   console.log(x * x);
})(10);
