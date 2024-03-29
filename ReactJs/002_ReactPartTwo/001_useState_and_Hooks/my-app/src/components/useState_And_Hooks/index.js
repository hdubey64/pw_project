import React, { useState, useEffect } from "react";
let z = 0;
const Counter = ({ title }) => {
   const [x, setX] = useState(0);
   const [y, setY] = useState(0);

   // useEffect(() => {
   //    document.title = `Count: ${y}`;
   // }, [y]);
   return (
      <div>
         <h1>{title}</h1>
         count: {z}
         <button onClick={() => (z += 1)}>Icreament</button>
         <br />
         count: {x}
         <button onClick={() => setX(x + 1)}>Icreament</button>
         <button onClick={() => setX(x - 1)}>Decrement</button>
         <br />
         count: {y}
         <button onClick={() => setY(y + 1)}>Icreament</button>
         <button onClick={() => setY(y - 1)}>Decrement</button>
      </div>
   );
};

export default Counter;
