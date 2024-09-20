import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getUserMedication = (userId) => {
	return axios.get(`${API_URL}/medications/${userId}`);
};