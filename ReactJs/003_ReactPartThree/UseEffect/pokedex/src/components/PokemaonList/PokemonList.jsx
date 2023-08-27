import React, { useEffect, useState } from 'react'

const PokemonList = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    useEffect(() => {
        console.log("Effect Called")


    }, [x])

    return (
        <>
            <div>
                X:{x} <button onClick={() => setX(x + 1)}>Inc</button>
            </div>
            <div>
                X:{y} <button onClick={() => setY(y + 1)}>Inc</button>
            </div>

        </>
    )
}

export default PokemonList