// src/App.js

import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
    const [results, setResults] = useState([]);

    const handleSearch = async (keyword) => {
        try {
            const response = await fetch(`https://bp-reputationmanager.cloudfunctions.net/search?keyword=${keyword}`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="App">
            <h1>Ingresa la palabra clave</h1>
            <SearchForm onSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
}

export default App;