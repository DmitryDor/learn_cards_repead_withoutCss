import React from 'react';
import './App.css';
import { Preloader } from './components/Preloader/Preloader';

import { Header } from './pages/header/Header';

import { Routes } from './routes/Routes';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes/>
            {/*<Preloader/>*/}
        </div>
    );
}

export default App;
