import React, { useState, useEffect } from 'react';
import { getMovies } from './MovieApi/MovieApi';
import { Card } from './Cards/Cards';
import { Link } from "react-router-dom";


export function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovies = async () => {
            const movieList = await getMovies();
            setMovies(movieList);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <Link to={`/details/${movie.id}`} key={movie.id}>
                    <Card movie={movie} />
                </Link>
            ))}
        </div>
    );
}