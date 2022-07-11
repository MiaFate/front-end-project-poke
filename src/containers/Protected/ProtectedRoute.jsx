import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

	const {user, loading} = useAuth();

	if(loading) return <h1>Loading</h1>

	if(!user) return <Navigate to='/'/>

	return <><Outlet/></>
}

export default ProtectedRoutes
