import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import TeamCard from '../../components/cards/TeamCard';
import usePokemons from '../../hooks/usePokemons';

const TeamPage = () => {
	const [alert, setAlert] = useState();
	const { team } = usePokemons();

	if (team.length >= 1) {
		return (
			<div className='max-w-4xl min-h-full flex flex-col mx-auto mb-4 p-1 md:p-12 rounded-xl shadow-2xl items-center justify-center'>
				{alert && <Alert type="delete" message="You've deleted from your team"/>}
				<div className='grid gap-4 grid-cols-1 place-content-center md:md:grid-cols-3 xl:grid-cols-3'>
					{
						team.map((pokemon, index) => (<TeamCard key={index} name={pokemon.name} />))
					}
				</div>
			</div>
		)
	} else {

		return (
			<div className='max-w-3xl min-h-full flex flex-col mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center'>
				No hay pokemones en tu equipo
			</div>
		)

	}


}

export default TeamPage