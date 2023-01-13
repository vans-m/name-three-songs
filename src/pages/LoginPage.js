import React from 'react'
import { SPOTIFY_AUTH_HREF } from '../constants/spotify'
import logo from '../img/spotify-logo.png'

const LoginPage = () => {
	return (
		<div className="container">
			<div className="header__title--login header__content">
				<h1 className="box-layout">
					<span className="small">Name</span>
					<span className="big">
						Three
						<span className="rectangle-login" />
					</span>

					<span className="small">Songs</span>
				</h1>
			</div>
			<div className="button-container">
				<a className="button" href={SPOTIFY_AUTH_HREF}>
					<img className="button--content" width={25} src={logo}></img>
					<span className="button--content"> Login with Spotify</span>
				</a>
				<p className="button--subtitle">You will need a Spotify account to use this app</p>
			</div>
		</div>
	)
}

export default LoginPage
