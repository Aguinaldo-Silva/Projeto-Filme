import styles from './card.module.css';
import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../MovieApi/MovieApi';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function Card({ movie }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        if (!movie.runtime) {
            const fetchMovieDetails = async () => {
                const movieDetails = await getMovieDetails(movie.id);
                setDetails(movieDetails);
            };

            fetchMovieDetails();
        } else {
            setDetails(movie);
        }
    }, [movie]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...cart, movie];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert('Filme adicionado ao carrinho!');
    };

    if (!details) return <div>Carregando...</div>;

    return (
        <div
            className={styles.movie_card}
            style={{ backgroundImage: `url(${IMAGE_BASE_URL}${details.backdrop_path || movie.backdrop_path})` }}
        >
            <div className={styles.overlay}></div>
            <div className={styles.info_section}>
                <div className={styles.movie_header}>
                    <img
                        className={styles.locandina}
                        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className={styles.movie_info}>
                        <h1>{movie.title}</h1>
                        <h4>{new Date(movie.release_date).getFullYear()}</h4>
                        <div className={styles.movie_metadata}>
                            <span className={styles.minutes}>
                                {details.runtime || movie.runtime} Minutos
                            </span>
                        </div>
                        <button onClick={addToCart} className={styles.add_to_cart}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}