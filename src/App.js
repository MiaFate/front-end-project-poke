import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//container con nav y footer
import Layout from './containers/Layout/Layout';

//public pages
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import PassResetPage from './pages/PassResetPage/PassResetPage';

//protected pages
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TeamPage from './pages/TeamPage/TeamPage';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import ProtectedRoutes from './containers/Protected/ProtectedRoute';

function App() {
	return (	
		<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage/>}/>
					<Route path='/signup' element={<SignUpPage/>}/>
					<Route path='/resetpass' element={<PassResetPage/>}/>

				
				<Route element={<ProtectedRoutes/>}>
					<Route element={<Layout/>}>
						<Route path='/home' element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/team' element={<TeamPage />} />
						<Route path='/pokemon/:name' element={<PokemonPage/>}/>
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Route>
				
			</Routes>
		</BrowserRouter>		
	);
}

export default App;
