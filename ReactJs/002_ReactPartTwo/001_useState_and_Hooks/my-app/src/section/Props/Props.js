import React from "react";
import Avatar from "../../components/useState_And_Hooks/Aavtar";
const obj = {
   src: "https://res.cloudinary.com/practicaldev/image/fetch/s--i0VGiC7h--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x94d29a9glhgpupakzn2.png",
   width: "300px",
   height: "200px",
};

const Props = ({ title }) => {
   return (
      <div>
         <h1>{title}</h1>
         <Avatar {...obj} />
         <Avatar
            src="https://miro.medium.com/v2/resize:fit:1400/0*aIQ1srPAFik3BySS"
            width="300px"
            height="200px"
         />
         <Avatar
            src="https://e0.pxfuel.com/wallpapers/169/891/desktop-wallpaper-inspirational-background-android-developer.jpg"
            width="300px"
            height="200px"
         >
            <h1>Hello Dev...!</h1>
         </Avatar>
      </div>
   );
};

export default Props;
