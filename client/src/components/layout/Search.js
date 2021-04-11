import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/products/search/${keyword}`);
    } else {
      history.push("/products");
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
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="input-group-append">
          <button
            id="search_btn"
            className="btn btn-primary"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
      </div>
    </from>
  );
};

export default Search;
