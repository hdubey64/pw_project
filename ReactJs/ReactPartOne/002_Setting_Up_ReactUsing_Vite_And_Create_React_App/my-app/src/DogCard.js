import Image from "./Images";
import Name from "./Name";

const DogCard = (props) => {
   let title = "This is a Dog card.";
   return (
      <div>
         <h2 style={{ fontSize: "40px", color: "cyan" }}>{title}</h2>
         <Name>
            {" "}
            <h3>{props.name}</h3>
         </Name>
         <Image src={props.img} />
      </div>
   );
};

export default DogCard;
