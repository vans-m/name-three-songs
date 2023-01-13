export const getGenre = (genres) => {
	if (!genres) {
		return null
	}
	if (!genres.length) {
		return null
	}
	return genres[1] ? `${genres[0]} - ${genres[1]}` : genres[0]
}

export const getAlbumDetails = (album) => {
	if (!album) {
		return null
	}
	return album.release_date ? `${album.name} - ${album.release_date.substring(0, 4)}` : album.name
}

export const getImage = (images) => {
	if (!images) {
		return null
	}
	if (!images.length) {
		return null
	}
	return images[0].url
}
