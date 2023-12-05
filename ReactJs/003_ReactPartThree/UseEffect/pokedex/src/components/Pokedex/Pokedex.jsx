import PokemonList from "../PokemaonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";

const Pokedex = () => {
   return (
      <div className="pokedexWraper">
         <Search />
         <PokemonList />
      </div>
   );
};

export default Pokedex;
