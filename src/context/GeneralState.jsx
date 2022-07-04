import React, { useReducer } from "react"
import GeneralContext from "./GeneralContext";
import axios from "axios";
import GeneralReducer from "./GeneralReducer";

const GeneralState = ({children}) => {
		// const getTheme = async () => {

		// 	if ( window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 		document.documentElement.classList.add('dark')
		// 		return 'dark'
		// 	}
		// 		document.documentElement.classList.remove('dark')
		// 		return 'light' 
		// }

    const initialState = {
				pokemons: [],
				selectedPokemon: null,
        team: [],
				theme: "light" // light theme por defecto
    }

    const [state, dispatch] = useReducer(GeneralReducer, initialState);

	

		const changeTheme = async (theme) => {

			localStorage.setItem('theme', theme);
			if(localStorage.theme === 'dark' ||  !('theme' in localStorage) || theme === 'dark'){
				document.documentElement.classList.add('dark')
			}else{
				document.documentElement.classList.remove('dark')
			}

			dispatch({ 
				type: 'CHANGE_THEME',
				payload: theme
			})
		}
    
    const getPokemonList= async () => {
			const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')

			dispatch({ 
				type: 'GET_POKEMON_LIST',
				payload: res.data.results
			})
		}

		const getPokemon = async (url) => {
			const res = await axios.get(url)
			return res.data
		}

		// const getPokemonDetails = async (url) => {
		// 	const res = await axios.get(url)

		// 	dispatch({ 
		// 		type: 'GET_POKEMON',
		// 		payload: res.data.results
		// 	})
		// }
    
		const addToTeam = async (pokemon) => {
			
			const localTeam = localStorage.getItem('team')

			if(!JSON.parse(localTeam)){
				localStorage.setItem('team', JSON.stringify([ pokemon.name ]))
			}else{
				const newTeam = [...JSON.parse(localTeam), pokemon.name]
				localStorage.setItem('team', JSON.stringify(newTeam))
			}


			dispatch({
				type: 'ADD_POKEMON',
				payload: pokemon
			})
		}

		const removeFromTeam = async (name) => {
			const newTeam = state.team.filter( pokemon => pokemon.name !== name  )
			const localTeam = JSON.parse(localStorage.getItem('team'))

			
			if(localTeam){
				const newLocalTeam = localTeam.filter( pokemonName => pokemonName !== name)
				localStorage.setItem('team', JSON.stringify(newLocalTeam))
			}
			
			dispatch({
				type: 'REMOVE_POKEMON',
				payload: newTeam
			})
		}

    return (
      <GeneralContext.Provider value={{
				getPokemonList, 
				getPokemon, 
				addToTeam,
				removeFromTeam,
				pokemons: state.pokemons,
				selectedPokemon: state.selectedPokemon,
				team: state.team, 
				theme: state.theme,
				changeTheme 
			}}>

				{children}

    	</GeneralContext.Provider>
    )
}

export default GeneralState;