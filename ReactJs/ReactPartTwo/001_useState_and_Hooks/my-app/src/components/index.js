import React, { useState } from "react";
let z = 0;
const Counter = () => {
   const [x, setX] = useState(0);
   const [y, setY] = useState(0);
   return (
      <div>
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
