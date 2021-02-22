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
          <h2>Title: {result.title}</h2>
          <h3>Author: {result.author}</h3>
          <a href={result.url}>Go to Source</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
