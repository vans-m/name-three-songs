const updateToken = (setToken) => {
	const hash = window.location.hash
	let token = window.localStorage.getItem('token')
	let accessToken

	if (hash) {
		accessToken = hash
			.substring(1)
			.split('&')
			.find((elem) => elem.startsWith('access_token'))
			.split('=')[1]
	}
	if (!token && hash) {
		token = accessToken
		window.location.hash = ''
		window.localStorage.setItem('token', token)
	} else if (token && hash && token != accessToken) {
		token = accessToken
		window.location.hash = ''
		window.localStorage.setItem('token', token)
	}

	setToken(token)
}
export default updateToken
