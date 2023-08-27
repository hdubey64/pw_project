import React, { useState } from "react";
let z = 0;
const ConditionalRendringCopy = ({ title }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [inputValue, setInputValue] = useState("");
   let element;
   const handleLogin = (event) => {
      setInputValue(event.target.value);
   };
   const handleLogout = (event) => {
      setInputValue(" ");
   };

   if (isLoggedIn) {
      element = (
         <div>
            <p>Welcome Back {inputValue} !</p>
            <p>You are is LoggedIn</p>
         </div>
      );
   } else {
      element = (
         <div>
            <form>
               <label>
                  Email:
                  <input type="email" onChange={handleLogin} />
               </label>
               <br />
               <label>
                  Password:
                  <input type="Password" />
                  <br />
               </label>
            </form>
         </div>
      );
   }

   return (
      <>
         <h1>{title}</h1>
         {element}
         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
         </button>
      </>
   );
};

export default ConditionalRendringCopy;
