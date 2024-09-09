import React, { useState, useEffect } from 'react';
import { getMovies } from './MovieApi/MovieApi';  // Importa a função de buscar filmes
import { Card } from './Cards/Cards';  // Importa o componente MovieCard


export function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Busca a lista de filmes populares
        const fetchMovies = async () => {
            const movieList = await getMovies();
            setMovies(movieList);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
}