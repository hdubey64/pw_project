import { useState } from "react";
import PokemonList from "../PokemaonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";

const Pokedex = () => {
   const [searchTerm, setSearchTerm] = useState("");
   return (
      <div className="pokedexWraper">
         <Search updateSerchTerm={setSearchTerm} />
         {searchTerm}
         {searchTerm.length === 0 ? <PokemonList /> : ""}
      </div>
   );
};

export default Pokedex;
