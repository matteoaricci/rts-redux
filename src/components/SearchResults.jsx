import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="results-container">
      {results.map((result) => (
        <div
          // Styling may not be part of the challenge, but this is helpful for my own readability
          style={{
            textAlign: "left",
            margin: "10px",
            backgroundColor: "#f5feff",
            padding: "10px",
          }}
        >
          <h2>
            <a href={result.url}>Title: {result.title}</a>
          </h2>
          <h3>Author: {result.author}</h3>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
