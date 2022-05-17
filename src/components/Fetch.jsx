import React, { useEffect, useState } from 'react'

export default function Fetch() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then( res => res.json() )
      .then( res => {
        if (res.results) {
          setPokemons(res.results)
        } else {
          throw new Error('Ocurrió un error')
        }
      })
      .catch( e => console.log(e) )

  }, [])
  

  return (
    <div>
      { pokemons &&
        pokemons.map( (pokemon, index) => {
        return (
          <div key={ index }>
            <p>#{ index + 1 } - { pokemon.name }</p> 
            <img alt={ pokemon.name } src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
          </div>
        )}
        )
      }
    </div>
  )
}
