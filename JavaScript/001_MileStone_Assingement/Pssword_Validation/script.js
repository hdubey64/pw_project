document.querySelector("#demoForm").addEventListener("submit", (event) => {
   event.preventDefault();
   let emailInput = document.querySelector("#mail");
   let passwordInput = document.querySelector("#passCode");
   let email = emailInput.value;
   let password = passwordInput.value;
   let massage = document.querySelector("#para");

   if (email.includes("@") && password.length >= 8) {
      massage.innerText = "🙂  Login successful....! 👍👍👍 ";
      massage.style.color = "green";
      alert(`🙏 Welcome ${email} ! 🙂 `);
   } else {
      massage.innerText = "😔  Incorrect email or password !!!";
      massage.style.color = "red";
      alert(
         `Opps.....! Please check your email or password is incorrect ! 😔 `
      );
   }
});
