let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let result = document.getElementById("result");

decrementBtn.addEventListener("click", () => {
   const value = Number(result.innerText);
   if (value <= 0) {
      alert("Nagative value is not Allowed");
   } else {
      result.innerText = value - 1;
   }
});

incrementBtn.addEventListener("click", () => {
   const value = Number(result.innerText);
   if (value >= 10) {
      alert("10+ value is not Allowed");
   } else {
      result.innerText = value + 1;
   }
});

resetBtn.addEventListener("click", () => {
   result.innerText = 0;
});
