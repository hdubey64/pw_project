import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./PokemonList.css"
import Pokenmon from "../Pokemon/Pokemon"

const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'

const PokemonList = () => {


    const [pokemonList, setPokemonList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    async function downloadPkemon() {
        //Pokemon Url Download list of 20 Pokemon
        const response = await axios.get(POKEDEX_URL)

        const pokemonResult = response.data.results // We get array of pokemons from results

        //Iterating ober the array of pokomons, and using their url, to create a 
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
        const pokemonData = await axios.all(pokemonResultPromise)
        console.log(pokemonData)
        const res = pokemonData.map((pokedata) => {
            const pokemon = pokedata.data
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites,
                types: pokemon.types
            }
        })
        console.log(res)
        setPokemonList(res)
        setIsLoading(false)
    }

    useEffect(() => {
        downloadPkemon()

    }, [])

    return (
        <div className='pokemonListWrapper'>
            Pokemon List
            {(isLoading) ? 'Loading.......' : pokemonList.map((p) => <Pokenmon key={p.id} name={p.name} image={p.image} />)}
        </div>
    )
}

export default PokemonList