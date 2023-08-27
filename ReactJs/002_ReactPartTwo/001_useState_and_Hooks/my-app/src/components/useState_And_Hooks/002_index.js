import React, { useState, useEffect } from "react";
let z = 0;
const ConditionalRendring = ({ title }) => {
   const [x, setX] = useState(0);
   const [isEdtting, setIseditting] = useState(false);
   const [todos, setTodos] = useState(["todo1", "todo2"]);
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   let user;
   if (isLoggedIn) {
      user = "You are logged in";
   } else {
      user = "Please Login";
   }

   return (
      <div>
         <h1>{title}</h1>
         count: {x} is {x % 2 == 0 ? "Even" : "Odd"}
         <br />
         <button onClick={() => setX(x + 1)}>Icreament</button>
         <button onClick={() => setX(x - 1)}>Decrement</button>
         <br />
         {isEdtting ? <input /> : <p>Some todo</p>}
         <button onClick={() => setIseditting(!isEdtting)}>Click</button>
         <br />
         <ul>
            {todos.map((todos) => (
               <li> {todos}</li>
            ))}
            <button onClick={() => setTodos([...todos, "Something New Here"])}>
               Click
            </button>
         </ul>
         <br />
         {user}
         <br />
         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
         </button>
      </div>
   );
};

export default ConditionalRendring;
