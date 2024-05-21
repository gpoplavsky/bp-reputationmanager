import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(keyword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchForm;
