import React from 'react';
import { MovieList } from './Pages/MovieList/MovieList.jsx';
import Header from './Components/Header/Header.jsx'


export function App() {
    return (
        <div className="App">
            <Header />
            <MovieList />
        </div>
    );
}




