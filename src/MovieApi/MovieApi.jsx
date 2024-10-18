import { API_KEY, BASE_URL } from './api_key'; 


export const getMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc`, API_KEY);
        if (!response.ok) {
            throw new Error('Erro ao buscar filmes');
        }
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};




export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?&language=pt-BR`, API_KEY); 
        if (!response.ok) {
            throw new Error('Erro ao buscar detalhes do filme');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
        return null;
    }
};
