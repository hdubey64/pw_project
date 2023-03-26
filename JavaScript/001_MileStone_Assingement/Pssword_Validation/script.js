document.querySelector("#demoForm").addEventListener("submit", (event) => {
   event.preventDefault();
   let emailInput = document.querySelector("#mail");
   let passwordInput = document.querySelector("#passCode");

   let email = emailInput.value;
   let password = passwordInput.value;

   if (email.includes("@") && password.length === 8) {
      document.querySelector("#para").innerText = "Login successful!";
   } else {
      document.querySelector("#para").innerText = "Invalid email or password.";
   }
   console.log(emailInput.value);
   console.log(passwordInput.value);
});
