import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SelectedArtistContext } from '..'
import ResultItem from '../components/ResultItem'
import { getGenre, getAlbumDetails, getImage } from '../utilities/resultItem'
import ErrorModal from '../components/ErrorModal'
import { SPOTIFY_AUTH_HREF } from '../constants/spotify'
import Loader from '../components/loader'
import useSearchSpotify from '../hooks/useSearchSpotify'

const ResultPage = () => {
	const navigate = useNavigate()
	const { artist, setArtist } = useContext(SelectedArtistContext)
	const [songs, setSongs] = useState([])
	const { id } = useParams()

	const { data, isLoading, isTokenExpired, hasError } = useSearchSpotify(
		`https://api.spotify.com/v1/artists/${id}/top-tracks?market=gb`,
		{ q: 'GB', limit: 3 }
	)
	useEffect(() => {
		if (data.tracks) {
			setSongs(data.tracks.slice(0, 3))
		}
	}, [data])

	const manageNewArtist = () => {
		setArtist({})
		navigate('/search')
	}

	const genre = artist && getGenre(artist.genres)
	const artistFromSong = songs.length && songs[0].artists[0].name

	return (
		<main className="container">
			<h2 className="artist__name">{artist.name || artistFromSong}</h2>
			{genre && <span className="artist__genre">{genre}</span>}
			<h3 className="artist__songs">Songs</h3>
			{isLoading && <Loader />}
			{songs && (
				<ul className="results-list results">
					{songs.map((song) => (
						<li key={song.id}>
							<ResultItem
								img={getImage(song.album.images)}
								title={song && song.name}
								sub={getAlbumDetails(song.album)}
								isResult
							/>
						</li>
					))}
				</ul>
			)}
			<ErrorModal
				show={isTokenExpired}
				message="Your session has expired."
				actionTxt="Login with Spotify"
				actionUrl={SPOTIFY_AUTH_HREF}
			/>
			<ErrorModal
				show={hasError}
				message="An unexpected error occurred."
				actionTxt="Login with Spotify"
				actionUrl={SPOTIFY_AUTH_HREF}
			/>
			<button onClick={manageNewArtist} className="button button--secondary">
				<span className="button--content">Search another artist</span>
			</button>
		</main>
	)
}

export default ResultPage
