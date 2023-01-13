import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectedArtistContext } from '..'
import ResultItem from './ResultItem'
import { getGenre, getImage } from '../utilities/resultItem'
import ErrorModal from './ErrorModal'
import { SPOTIFY_AUTH_HREF } from '../constants/spotify'
import Loader from './loader'
import useDebounce from '../hooks/useDebounce'
import useSearchSpotify from '../hooks/useSearchSpotify'

const SearchBox = () => {
	const [searchKey, setSearchKey] = useState('')
	const [isFocused, setIsFocused] = useState(false)
	const [artists, setArtists] = useState([])
	const navigate = useNavigate()
	const { setArtist } = useContext(SelectedArtistContext)
	const debouncedSearch = useDebounce(searchKey, 500)

	const { data, isLoading, isTokenExpired, hasError } = useSearchSpotify('https://api.spotify.com/v1/search', {
		q: debouncedSearch,
		type: 'artist',
		limit: 3
	})

	useEffect(() => {
		if (data.artists) {
			setArtists(data.artists.items)
		}
		if (!debouncedSearch) {
			setArtists([])
		}
	}, [data, debouncedSearch])

	const manageOnBlur = () => {
		if (!searchKey) {
			setIsFocused(false)
		}
	}

	const manageSelection = (artist) => {
		setArtist(artist)
		navigate(`/results/${artist.id}`)
	}

	return (
		<main className="container">
			<input
				type="text"
				className={isFocused ? 'text-input focused' : 'text-input'}
				onBlur={manageOnBlur}
				onFocus={() => setIsFocused(true)}
				onChange={(e) => setSearchKey(e.target.value)}
			/>
			{isLoading && <Loader />}
			{artists && (
				<ul className="results-list">
					{artists.map((artist) => (
						<li key={artist.id}>
							<button onClick={() => manageSelection(artist)}>
								<ResultItem img={getImage(artist.images)} title={artist.name} sub={getGenre(artist.genres)} />
							</button>
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
			<ErrorModal show={hasError} message="An unexpected error occurred." />
		</main>
	)
}

export default SearchBox
