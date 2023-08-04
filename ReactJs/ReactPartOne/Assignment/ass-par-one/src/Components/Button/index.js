import React from "react";

const Button = (props) => {
   return (
      <div>
         <button
            style={{
               padding: "10px 15px",
               borderRadius: "5px",
               border: "none",
               fontSize: "1.5rem",
               fontWeight: "600",
               outline: "none",
               background: "cyan",
            }}
            onClick={props.onClick}
         >
            {props.text}
         </button>
      </div>
   );
};

export default Button;
