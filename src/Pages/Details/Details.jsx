import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../MovieApi/MovieApi";
import styles from './card.module.css';
import Header from '../../Components/Header/Header'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState(null);

    useEffect(() => {
        async function fetchFilme() {
            const filmeDetalhado = await getMovieDetails(id);
            console.log("Detalhes do filme:", filmeDetalhado);
            if (filmeDetalhado) {
                setFilme(filmeDetalhado);
            } else {
                navigate("/");
            }
        }
        fetchFilme();
    }, [id, navigate]);

    if (!filme) {
        return <p>Carregando detalhes do filme...</p>;
    }

    return (
        <>
            <Header />
            <div
                className={styles.movie_card}
                style={{ backgroundImage: `url(${IMAGE_BASE_URL}${filme.backdrop_path})` }}
            >

                <div className={styles.overlay}></div>
                <div className={styles.info_section}>
                    <div className={styles.movie_header}>
                        <img
                            className={styles.locandina}
                            src={`${IMAGE_BASE_URL}${filme.poster_path}`}
                            alt={filme.title}
                        />
                        <div className={styles.movie_info}>
                            <h1>{filme.title}</h1>
                            <h4>{new Date(filme.release_date).getFullYear()}</h4>
                            <div className={styles.movie_metadata}>
                                <span className={styles.minutes}>{filme.runtime} Minutos</span>
                                <p className={styles.type}>
                                    {filme.genres && Array.isArray(filme.genres)
                                        ? filme.genres.map((genre) => genre.name).join(", ")
                                        : "Gêneros não disponíveis"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.movie_desc}>
                        <p className={styles.text}>{filme.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
