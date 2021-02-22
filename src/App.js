import React, { useState } from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const API_URL = "http://hn.algolia.com/api/v1/search?query=";

function App() {
  // state for handling the search form, and the results from the fetch call
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // callback function for fetching data from api and setting it in state
  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL + search)
      .then((resp) => resp.json())
      .then((news) => {
        setResults(news.hits);
        setSearch("");
      });
  };

  return (
    <div className="App">
      <SearchForm
        search={search}
        setSearch={setSearch}
        handleFormSubmit={handleFormSubmit}
      />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
