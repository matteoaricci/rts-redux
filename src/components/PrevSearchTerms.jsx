import React from "react";
import { connect } from "react-redux";

const PrevSearchTerms = ({ searchTerms }) => {
  return (
    <div className="previous-search">
      <h1>Previous Search Terms</h1>
      {searchTerms.map((term) => (
        <div>{term}</div>
      ))}
    </div>
  );
};

// Connect the component to the store
const mapStateToProps = (state) => ({
  searchTerms: state,
});

export default connect(mapStateToProps)(PrevSearchTerms);
