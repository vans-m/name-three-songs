import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SearchPage from '../pages/SearchPage'
import ResultPage from '../pages/ResultPage'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LoggedRoutes = ({ token }) => (
	<Routes>
		<Route path="/" element={token ? <Navigate to="/search" /> : <LoginPage />} />
		<Route path="/search" element={<SearchPage />} />
		<Route path="/results/:id" element={<ResultPage />} />
	</Routes>
)
const LogoutRoutes = () => (
	<Routes>
		<Route path="*" element={<LoginPage />} />
	</Routes>
)

const AppRouter = ({ token, logout }) => (
	<BrowserRouter>
		<Fragment>
			<Header token={token} />
			{!token ? <LogoutRoutes /> : <LoggedRoutes token={token} />}
		</Fragment>
		{token && <Footer logout={logout} />}
	</BrowserRouter>
)

export default AppRouter
