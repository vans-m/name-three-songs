import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss'
import updateToken from './utilities/updateToken'

export const TokenContext = React.createContext()
export const SelectedArtistContext = React.createContext()

const App = () => {
	const [token, setToken] = useState('')
	const [artist, setArtist] = useState({})

	useEffect(() => {
		updateToken(setToken)
	}, [])

	const logout = () => {
		setToken('')
		window.localStorage.removeItem('token')
	}

	return (
		<TokenContext.Provider value={{ token, logout }}>
			<SelectedArtistContext.Provider value={{ artist, setArtist }}>
				<AppRouter token={token} />
			</SelectedArtistContext.Provider>
		</TokenContext.Provider>
	)
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)
