import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import styles from './carrinho.module.css';

export default function Carrinho() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (movieId) => {
        const updatedCart = cart.filter(movie => movie.id !== movieId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <>
            <Header />
            <div className={styles.carrinho}>
                <h2>Seu Carrinho</h2>
                {cart.length === 0 ? (
                    <p>Você ainda não adicionou nenhum item ao carrinho.</p>
                ) : (
                    <div>
                        {cart.map(movie => (
                            <div key={movie.id} className={styles.cart_item}>
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                <div>
                                    <h3>{movie.title}</h3>
                                    <button onClick={() => removeFromCart(movie.id)}>Remover</button>
                                </div>
                            </div>
                        ))}
                        <button onClick={clearCart} className={styles.clear_cart}>Limpar Carrinho</button>
                    </div>
                )}
            </div>
        </>
    );
}