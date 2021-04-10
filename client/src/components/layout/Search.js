import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setkeyWord] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      history.pushState(`/search/${keyword}`);
    } else {
      history.pushState("/");
    }
  };

  return (
    <from onSubmit={searchHandler}>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="from-control"
          placeholder="Enter Product Name..."
          onChange={(e) => setkeyWord(e.target.value)}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            Click Me
          </button>
        </div>
      </div>
    </from>
  );
};

export default Search;
