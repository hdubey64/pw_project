import React from "react";
const List = (props) => {
   return (
      <div>
         <ul style={{ fontSize: "2.5rem", color: "#ccff00" }}>
            {props.items.map((item) => (
               <li key={item}>{item}</li>
            ))}
         </ul>
      </div>
   );
};

export default List;
