import axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api/character?page=1'; 

export const fetchData = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}`);
        return data.results;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }
};