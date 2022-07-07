import GeneralContext from "../context/GeneralContext"

export const useAuth = () => {
	const context = useContext(GeneralContext)
	if(!context) throw new Error('There is no auth provider')
	return context
}