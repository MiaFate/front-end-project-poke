import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//container con nav y footer
import Layout from './containers/Layout/Layout';

//protected pages
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TeamPage from './pages/TeamPage/TeamPage';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import ProtectedRoutes from './containers/Protected/ProtectedRoute';
import Loading from './components/loading/Loading';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

//public pages
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const PassResetPage = lazy(() => import('./pages/PassResetPage/PassResetPage'));

function App() {
	return (
		<BrowserRouter>
			<Routes>

				<Route path='*' element={<NotFoundPage />} />
				<Route path='/' element={<Suspense fallback={<Loading />}><LandingPage /></Suspense>} />
				<Route path='/signup' element={<Suspense fallback={<Loading />}><SignUpPage /></Suspense>} />
				<Route path='/resetpass' element={<Suspense fallback={<Loading />}><PassResetPage /></Suspense>} />

				<Route element={<ProtectedRoutes />}>
					<Route element={<Layout />}>
						<Route path='/home' element={<HomePage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/team' element={<TeamPage />} />
						<Route path='/pokemon/:name' element={<PokemonPage />} />
					</Route>
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
