import "./Pokemon.css"

const Pokemon = ({ name, image }) => {
    return (
        <div className='pokemonWrapper'>
            <div>{name.toUpperCase()}</div>
            <div><img className="image" src={image} alt="" /></div>
        </div>
    )
}

export default Pokemon