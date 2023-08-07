import React from "react";

//*****Method:-1*****
// const Avatar = (props) => {
const Avatar = ({ src, width, height, children }) => {
   return (
      <div>
         {/* //*****Method:-1*****
   <img src={props.src} width={props.width} height={props.height} /> */}
         <img src={src} width={width} height={height} />
         {children}
      </div>
   );
};

export default Avatar;
