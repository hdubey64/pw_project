import { useState } from "react";
import PokemonList from "../PokemaonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const Pokedex = () => {
   const [searchTerm, setSearchTerm] = useState("");
   return (
      <div className="pokedexWraper">
         <Search updateSerchTerm={setSearchTerm} />
         {searchTerm}
         {!searchTerm ? (
            <PokemonList />
         ) : (
            <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
         )}
      </div>
   );
};

export default Pokedex;
