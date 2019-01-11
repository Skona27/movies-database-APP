import React from "react";

const SearchBar = props => (
  <form className="input-group mb-3 searchBar">
    <input type="text" className="form-control" placeholder="Search a movie" aria-label="Search a movie" />
    <div className="input-group-append">
      <button className="btn btn-primary" type="button">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </form>
)

export default SearchBar;