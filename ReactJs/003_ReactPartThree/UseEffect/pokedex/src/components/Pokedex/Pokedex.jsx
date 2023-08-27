import PokemonList from "../PokemaonList/PokemonList"
import Search from "../Search/Search"
import "./Pokedex.css"


const Pokedex = () => {
    return (
        <div className="pokedexWraper"><h1 className="headTag">Pokedex</h1>
            <Search />
            <PokemonList />
        </div>

    )
}

export default Pokedex