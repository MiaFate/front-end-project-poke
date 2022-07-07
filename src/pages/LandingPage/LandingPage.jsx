import { Link } from 'react-router-dom'

const LandingPage = () => {
	return (
		<div>
			in construction ....
			<h1 className='font-bold'>LandingPage</h1>
			<Link to='/home'>
				<button type='button'  className="bg-red-500 hover:bg-red-700 text-white font-bold my-2 py-2 px-4 rounded">
						Go Home!
				</button>
			</Link>
		</div>
	)
}

export default LandingPage