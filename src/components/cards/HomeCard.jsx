import React, { useState, useEffect } from 'react'
import usePokemons from '../../hooks/usePokemons';

const HomeCard = ({ name }) => {
	const { getPokemon, addToTeam } = usePokemons();
	const [pokemon, setPokemon] = useState();

	const getPokemonData = async () => {
		const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
		const data = await getPokemon(url);
		setPokemon(data);
	};

	useEffect(()=>{
		getPokemonData();
	},[])
	

    if (pokemon) {
			return (
				<div className='shadow hover:shadow-2xl max-w-sm rounded overflow-hidden flex flex-col justify-center items-center m-2 px-0.5 py-2 border border-gray-300'>
						<img className="w-full h-72" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon"></img>
						<div className="px-6 py-4 text-center">
								<div className="font-bold text-xl mb-2 dark:text-white">{pokemon.name}</div>
						</div>

						<button onClick={() => addToTeam(pokemon)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
								Add to my team
						</button>
				</div>)
    } else {
      return (<p>Cargando...</p>)
    }

}

export default HomeCard