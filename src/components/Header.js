import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ token }) => {
	if (!token) {
		return null
	}
	return (
		<header className="header">
			<div className="container">
				<Link to="/search" className="header__title--link">
					<span className="header__title">Name Three Songs</span>
					<span className="rectangle" />
				</Link>
			</div>
		</header>
	)
}

export default Header
