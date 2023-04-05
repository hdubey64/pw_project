let data = [];

function addList() {
   let inputData = document.querySelector("#task");
   let newData = document.createElement("li");

   if (inputData.value != "") {
      if (data.length <= 7) {
         let isDuplicate = false;
         for (let i = 0; i <= data.length; i++) {
            if (data[i] === inputData.value) {
               isDuplicate = true;
               break;
            }
         }
         if (isDuplicate) return alert("Already exist");

         newData.innerText = inputData.value;
         document.querySelector("#showTask").appendChild(newData);
         data.push(inputData.value);
         inputData.value = "";
      } else {
         alert("List Full");
         return;
      }
   } else {
      alert("Enter your Task");
   }
}

function resetTask() {
   document.querySelector("#showTask").innerText = "";
   data.splice(0, data.length);
}
