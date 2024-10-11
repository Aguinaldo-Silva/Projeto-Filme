import React, { useState, useEffect } from 'react';
import { getMovies } from '../../MovieApi/MovieApi';
import { Card } from '../../Components/Cards/Cards';
import { Link } from "react-router-dom";
import styles from './index.module.css'


export function MovieList() {
    const [movies, setMovies] = useState([]);

    const [buscarFiltro, setBuscarFiltros] = useState("");



    useEffect(() => {

        const fetchMovies = async () => {
            const movieList = await getMovies();
            setMovies(movieList);
        };

        fetchMovies();
    }, []);


    function aoBuscar(event) {
        const textoBusca = event.target.value.toLowerCase()
        setBuscarFiltros(textoBusca)




    }

    function filtrarFilmes() {
        if (!buscarFiltro) {
            return movies;
        } else {

            return movies.filter(filme => filme.title && filme.title.toLowerCase().includes(buscarFiltro))
        }
    }





    return (
        <div className="movie-list">

            <div className={styles.pesquisa}>
                <input
                    type="text"
                    value={buscarFiltro}
                    onChange={aoBuscar}
                    placeholder="Buscar filme pelo nome..."
                    className={styles.campoPesquisa}
                />
            </div>
            <div className={styles.listaFilmes}>
                {filtrarFilmes().map((movie) => (
                    <Link style={{ textDecoration: 'none' }} to={`/details/${movie.id}`} key={movie.id}>
                        <Card movie={movie} />
                    </Link>
                ))}
            </div>
        </div>
    );
}