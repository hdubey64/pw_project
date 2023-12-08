import React, { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList() {
   const [pokemonListState, setPokemonListState] = useState({
      pokemonList: [],
      isLoading: true,
      pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
      nextUrl: "",
      prevUrl: "",
   });

   async function downloadPkemon() {
      // setIsLoading(true);
      setPokemonListState({ ...pokemonListState, isLoading: true });
      //Pokemon Url Download list of 20 Pokemon
      const response = await axios.get(pokemonListState.pokedexUrl);
      const pokemonResult = response.data.results; // We get array of pokemons from results
      setPokemonListState((state) => ({
         ...state,
         nextUrl: response.data.next,
         prevUrl: response.data.previous,
      }));

      // setNextUrl(response.data.next);
      // setPrevUrl(response.data.previous);

      //Iterating ober the array of pokomons, and using their url, to create an array of promices
      // that will download those 20 pokemons
      const pokemonResultPromise = pokemonResult.map((pokemon) =>
         axios.get(pokemon.url)
      );

      //Passing that promise array to axios.all
      const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemaon detailed data
      console.log(pokemonData);

      //now iterate on the data of each pokeon,and extract id, name, image, types
      const res = pokemonData.map((pokedata) => {
         const pokemon = pokedata.data;
         return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other
               ? pokemon.sprites.other.dream_world.front_default
               : pokemon.sprites,
            types: pokemon.types,
         };
      });
      console.log(res);
      // setPokemonList(res);
      // setIsLoading(false);
      setPokemonListState((state) => ({
         ...state,
         pokemonList: res,
         isLoading: false,
      }));
   }

   useEffect(() => {
      downloadPkemon();
   }, [pokemonListState.pokedexUrl]);

   return { pokemonListState, setPokemonListState };
}

export default usePokemonList;
