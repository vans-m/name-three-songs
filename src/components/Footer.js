import React, { useContext } from 'react'
import { TokenContext } from '..'

const Footer = () => {
	const { logout } = useContext(TokenContext)
	return (
		<footer className="footer">
			<div className="container">
				<button className="button button--tertiary" onClick={logout}>
					Logout
				</button>
			</div>
		</footer>
	)
}

export default Footer
