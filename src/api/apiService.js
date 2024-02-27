import axios from 'axios'

const API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const apiService = axios.create({
	baseURL: API_BASE_URL,
})

export const fetchWordData = async word => {
	const response = await apiService.get(`/${word}`)
	return response.data
}
