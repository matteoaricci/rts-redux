import React, { useState } from "react";
import "./App.css";
import { useSelector, connect } from "react-redux";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const API_URL = "http://hn.algolia.com/api/v1/search?query=";

const App = (props) => {
  // state for handling the search form, and the results from the fetch call
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  // const res = useSelector((state) => console.log(state));

  // callback function for fetching data from api and setting it in state
  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL + search)
      .then((resp) => resp.json())
      .then((news) => {
        setResults(news.hits);
        props.dispatch({ type: "ADD_SEARCH", payload: search });
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearch: (search) => dispatch({ type: "ADD_SEARCH", payload: search }),
  };
};

export default connect(mapDispatchToProps)(App);
