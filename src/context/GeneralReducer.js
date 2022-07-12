import { GET_POKEMON_LIST, GET_POKEMON, ADD_POKEMON, REMOVE_POKEMON, CHANGE_THEME, ADD_TEAM, SET_USER } from "./types";

const GeneralReducer = (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case CHANGE_THEME:

			return {
				...state,
				theme: payload
			}

		case GET_POKEMON_LIST:
			return {
				...state,
				pokemons: payload
			}

		case GET_POKEMON:
			return {
				...state,
				selectedPokemon: payload
			}

		case ADD_TEAM:
			return {
				...state,
				team: payload
			}

		case ADD_POKEMON:
			return {
				...state,
				team: [...state.team, payload]
			}
		case REMOVE_POKEMON:
			return {
				...state,
				team: payload
			}
		case SET_USER:
			return {
				...state,
				user: payload
			}

		default:
			return state;
	}
}

export default GeneralReducer;
