import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './index.module.css';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.className = savedTheme === 'dark' ? 'dark-mode' : 'light-mode';
        }
    }, []);

    const handleToggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.body.className = newTheme === 'dark' ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header className={styles.header}>
            <Link style={{ textDecoration: 'none', color: "inherit" }} to={"/"}>
                <h1>Site de Filmes</h1>
            </Link>
            <div className={styles.actions}>
                <button onClick={handleToggleTheme} placeholder='alterar cor'>DARKMODE</button>
                <Link to="/carrinho" className={styles.cartIcon}>
                    <FaShoppingCart size={24} />
                </Link>
            </div>
        </header>
    );
}