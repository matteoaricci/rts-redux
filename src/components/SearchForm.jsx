import React from "react";

const SearchForm = ({ handleFormSubmit, search, setSearch }) => {
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br></br>
      <button type="submit">Search!</button>
    </form>
  );
};

export default SearchForm;
