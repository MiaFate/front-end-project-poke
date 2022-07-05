import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//container con nav y footer
import Layout from './containers/Layout/Layout';

//pages
import AuthPage from './pages/AuthPage/AuthPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

//context
import GeneralState from './context/GeneralState';
import TeamPage from './pages/TeamPage/TeamPage';
import PassResetPage from './pages/PassResetPage/PassResetPage';

function App() {
	return (
		<GeneralState>
			<BrowserRouter>
					<Routes>
						<Route path='/login' element={<AuthPage/>}/>
						<Route path='/signup' element={<SignUpPage/>}/>
						<Route path='/resetpass' element={<PassResetPage/>}/>

					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/team' element={<TeamPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</GeneralState>
	);
}

export default App;
