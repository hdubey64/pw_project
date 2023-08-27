import Search from "../Search/Search"
import "./Pokedex.css"


const Pokedex = () => {
    return (
        <div className="pokedexWraper"><h1 className="headTag">Pokedex</h1>
            <Search />
        </div>
    )
}

export default Pokedex