// onclick Event
document.querySelector("#oneClickBtn").addEventListener("click", () => {
   document.querySelector("#paraOne").innerText =
      "Wow 😲 You Clicked  me! Well Done 👍";
});

// dblClick Event
document.querySelector("#twoClickBtn").addEventListener("dblclick", () => {
   document.querySelector("#paraTwo").style.color = "cyan";

   document.querySelector("#paraTwo").innerText =
      "You Clicked me Two Time 👉⏩";
   document.querySelector("#paraTwo").style.fontSize = "24px";
   document.querySelector("#paraTwo").style.fontWeight = "900";
});

// mouseover Event
let boxThree = document.querySelector("#bgChange");
boxThree.addEventListener("mouseover", () => {
   let paraThree = document.querySelector("#over");
   paraThree.innerText = "Take the pointer off me 👉⏩";
   boxThree.style.background = "green";
   console.log(paraThree);
});

//mouseout Event
boxThree.addEventListener("mouseout", () => {
   let paraThree = document.querySelector("#over");
   paraThree.innerText = "Move the pointer over me 👈";
   boxThree.style.background = "gray";
   console.log(paraThree);
});

//onkeypress Event
let boxFour = document.querySelector("#bgChangeTwo");
boxFour.addEventListener("keypress", () => {
   let paraFour = document.querySelector("#overTwo");
   paraFour.innerText =
      "Your Input is :" + document.querySelector("#bgChangeTwo").value;
   boxFour.style.background = "black";
   boxFour.style.color = "white";
   console.log(paraFour);
});

//keydown Event
let boxFive = document.querySelector("#bgChangeThree");
boxFive.addEventListener("keydown", () => {
   let paraFive = document.querySelector("#overThree");
   paraFive.innerText =
      "Your Input is :" + document.querySelector("#bgChangeThree").value;
   boxFive.style.background = "black";
   boxFive.style.color = "white";
   console.log(paraFive);
});
