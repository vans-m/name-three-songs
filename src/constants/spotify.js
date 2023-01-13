const CLIENT_ID = '9f38e34f65dd42c685e38b5b703f82ef'
const REDIRECT_URI = 'http://192.168.0.9:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

export const SPOTIFY_AUTH_HREF = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
