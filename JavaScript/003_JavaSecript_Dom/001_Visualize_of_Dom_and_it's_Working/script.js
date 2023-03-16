function changeText() {
   document.getElementById("myHeading").innerHTML = "Text Change Using Js";
}
function addNewItem() {
   let li = document.createElement("li");
   let newItem = document.createTextNode("Juice");
   li.appendChild(newItem);
   document.getElementById("myList").appendChild(li);
}

function add() {
   let num1 = document.getElementById("num1").value;
   let num2 = document.getElementById("num2").value;
   let result = parseInt(num1) + parseInt(num2);
   document.getElementById("result").innerHTML = "Result:" + result;
}

function updateTime() {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   document.getElementById("time").innerHTML =
      hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTime, 1000);

let quotes = [
   "Be the change that you wish to see in the world. - Mahatma Gandhi",
   "The only way to do great work is to love what you do. - Steve Jobs",
   "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
   "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
   "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
];

function generate() {
   let randomIndex = Math.floor(Math.random() * quotes.length);
   console.log(randomIndex);
   let quote = quotes[randomIndex];
   console.log(quote);
   document.getElementById("quote").innerHTML = quote;
}
