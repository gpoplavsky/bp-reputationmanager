import React from 'react';

const SearchResults = ({ results }) => {
    return (
        <div>
            <h2>Resultados de la búsqueda</h2>
            {results.map((result, index) => (
                <div key={index}>
                    <h3>{result.title}</h3>
                    <p>{result.snippet}</p>
                    <a href={result.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;