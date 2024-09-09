const API_KEY = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjFjMTFmZGQzNmRjNjNhYmM2MWNlZGJlZDYxNDc4NiIsIm5iZiI6MTcyNDM2OTEzOC44MTA0NDksInN1YiI6IjY2YmU3MTUyOWU0N2I1ZjM4Zjk3OWFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9UY0s8o7l425_ipV-zLbSHbuzCEEb1QKJI4cDVWaqpc'
    }
};
const BASE_URL = 'https://api.themoviedb.org/3';



// Função para buscar filmes populares
export const getMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc`, API_KEY);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};

// Função para buscar detalhes de um filme específico
export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?&language=pt-BR`, API_KEY);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
        return null;
    }
};