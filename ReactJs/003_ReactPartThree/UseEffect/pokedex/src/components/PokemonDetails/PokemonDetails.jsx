import "./PokemonDetails.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
   const { id } = useParams();

   const [pokemon, setPokemon] = useState({});

   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };

   async function downloadPokemon() {
      const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon({
         name: capitalizeFirstLetter(response.data.name),
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
      <section className="pokeDetailSection">
         <div className="pokemonDetailWrapper">
            <div className="pokemonImageWrapper">
               <img className="pokmonImage" src={pokemon.image} alt="" />
            </div>
            <div>
               {" "}
               <h1 className="pokemonName">{pokemon.name}</h1>
            </div>

            <div className="detailWrapper">
               <div className="details">
                  <div className="detailType">weight: {pokemon.weight}</div>
                  <div className="detailType">height: {pokemon.height}</div>
               </div>
               <div className="pokemonTypes">
                  {pokemon.types &&
                     pokemon.types.map((t) => (
                        <div className="types" key={t}>
                           {t}
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default PokemonDetails;
