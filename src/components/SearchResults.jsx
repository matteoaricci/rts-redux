import React from 'react';

const SearchResults = ({results}) => {
    return (
        <div>
            {results.map(result => (
                <div>{result.author}</div>
            ))}
        </div>
    );
}

export default SearchResults;
