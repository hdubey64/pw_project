import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
   const { id } = useParams();

   const [pokemon, setPokemon] = useState({});

   async function downloadPokemon() {
      const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon({
         name: response.data.name,
         image: response.data.sprites.other.dream_world.front_default,
         weight: response.data.weight,
         height: response.data.height,
         types: response.data.types.map((t) => t.type.name),
      });
   }

   useEffect(() => {
      downloadPokemon();
   }, []);

   return (
      <div className="pokemonDetailWrapper">
         <div> name: {pokemon.name}</div>
         <img className="pokmonImage" src={pokemon.image} alt="" />
         <div>weight: {pokemon.weight}</div>
         <div>height: {pokemon.height}</div>
         <div className="pokemonTypes">{pokemon.types}</div>
      </div>
   );
}

export default PokemonDetails;
