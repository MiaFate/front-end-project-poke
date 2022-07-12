import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import usePokemons from '../../hooks/usePokemons';

const PokemonPage = () => {
	const { name } = useParams();
	const { getPokemon } = usePokemons();

	const [pokemon, setPokemon] = useState();
	const navigate = useNavigate();

	const getPokemonData = async () => {
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
			const data = await getPokemon(url);
			setPokemon(data);

		} catch (error) {

			navigate('/notfound');
		}
	}

	useEffect(() => {
		getPokemonData();
	}, [])

	if (pokemon) return (
		<div className="w-full flex flex-col items-center content-center place-content-center">
			<h1 className='text-lg font-bold capitalize'>{name}</h1>
			<img className="w-full h-40" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon"></img>
			<p className='underline mt-2'>Abilities</p>
			<ul className="my-3">
				{pokemon.abilities.map(e => <li key={e.ability.name}>{e.ability.name}</li>)}
			</ul>
			<p className='underline'>Types</p>
			<ul className="my-3">
				{pokemon.types.map(e => <li key={e.type.name}>{e.type.name}</li>)}
			</ul>
		</div>
	)

}

export default PokemonPage