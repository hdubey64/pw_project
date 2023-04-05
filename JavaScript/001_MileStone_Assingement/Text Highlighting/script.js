let data = document.querySelector("p").innerText;
let word = data.split(" ");
let content = "";

for (let i = 0; i < word.length; i++) {
   if (word[i].length > 8) {
      content =
         content +
         "<span style='color:#ff00dd; font-weight: 700;'>" +
         word[i] +
         "</span>" +
         " ";
   } else {
      content = content + "<span>" + word[i] + "</span>" + " ";
   }

   let myPara = document.createElement("p");
   myPara.innerHTML = content;
   console.log(myPara);
   document.querySelector("p").innerText = "";
   document.querySelector("#para").appendChild(myPara);
}
