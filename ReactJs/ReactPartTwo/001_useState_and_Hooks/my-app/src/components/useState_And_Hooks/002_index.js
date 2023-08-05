import React, { useState, useEffect } from "react";
let z = 0;
const ConditionalRendring = () => {
   const [x, setX] = useState(0);
   const [isEdtting, setIseditting] = useState(false);
   const [todos, setTodos] = useState(["todo1", "todo2"]);

   return (
      <div>
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
      </div>
   );
};

export default ConditionalRendring;
