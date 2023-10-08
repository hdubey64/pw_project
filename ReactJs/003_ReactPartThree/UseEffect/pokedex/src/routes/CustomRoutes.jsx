import { Route, Routes } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/pokemonDetails";

const CustomRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={Pokedex} />
         <Route path="/pokeman/:id" element={PokemonDetails} />
      </Routes>
   );
};

export default CustomRoutes;
