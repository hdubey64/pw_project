import React from "react";

const Header = (props) => {
   return (
      <div>
         <header
            style={{ fontSize: "2rem", fontWeight: "700", color: "white" }}
         >
            This is{" "}
            <span style={{ fontSize: "2.5rem", color: "#ccff00" }}>
               {props.title}
            </span>
         </header>
      </div>
   );
};

export default Header;
