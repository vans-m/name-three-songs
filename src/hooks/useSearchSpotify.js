import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { TokenContext } from '..'

const useSearchSpotify = (api, params) => {
	const [data, setData] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [isTokenExpired, setIsTokenExpired] = useState(false)
	const [hasError, setHasError] = useState(false)
	const { token } = useContext(TokenContext)

	useEffect(() => {
		const searchData = async () => {
			setIsLoading(true)
			try {
				const { data } = await axios.get(api, {
					headers: {
						Authorization: `Bearer ${token}`
					},
					params
				})
				setData(data)
				setIsLoading(false)
			} catch (error) {
				const errorCode = error.response.data.error.status
				if (errorCode === 401) {
					setIsTokenExpired(true)
				} else {
					setHasError(true)
				}
				setIsLoading(false)
			}
		}

		if (params.q) {
			searchData()
		}
	}, [params.q])
	return { data, isLoading, isTokenExpired, hasError }
}

export default useSearchSpotify
