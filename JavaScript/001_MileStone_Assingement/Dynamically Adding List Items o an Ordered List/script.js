let data = [
   "HTML and Semantics",
   "Starting with CSS",
   "Working Template",
   "Mobile responsive webpages",
   "Grid and Flex-box in CSS",
   "Projects using HTML & CSS",
   "Getting Started with JavaScript",
   "Advance JavaScript",
   "Working with DOM",
];
let counter = 0;

function orderList() {
   if (data.length > counter) {
      let listData = document.createElement("li");
      let storage = document.querySelector(".para");
      listData.innerText = data[counter];
      counter++;
      listData.style.transition = "all 2s";
      document.querySelector(".para").appendChild(listData);

      console.log(listData);
      console.log(storage);
   } else {
      alert("All items have been added.");
   }
}
