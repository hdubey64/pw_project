import React from "react";

const Person = (props) => {
   return (
      <div style={{ padding: "40px 0" }}>
         <p style={{ fontSize: "2rem", fontWeight: "700", color: "white" }}>
            Hello! I am{" "}
            <span style={{ fontSize: "2.5rem", color: "#ccff00" }}>
               {props.name}{" "}
            </span>
            🙂. I'm{" "}
            <span style={{ fontSize: "2.5rem", color: "#ccff00" }}>
               {props.age}{" "}
            </span>{" "}
            years old.
         </p>
      </div>
   );
};

export default Person;
