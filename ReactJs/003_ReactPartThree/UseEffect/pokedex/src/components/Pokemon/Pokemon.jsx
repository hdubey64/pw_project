import "./Pokemon.css";
import { Link } from "react-router-dom";

const Pokemon = ({ name, image, id }) => {
   return (
      <div className="pokemonWrapper">
         <Link to={`pokemon/${id}`}>
            <div>{name.toUpperCase()}</div>
            <div>
               <img className="image" src={image} alt="" />
            </div>
         </Link>
      </div>
   );
};

export default Pokemon;
