import React from "react";
import MovieItem from "./MovieItem/MovieItem";

const MovieList = props => (
  <div className="movies moviesList">
    <button className="btn btn-outline-primary pages">
      <i className="fas fa-caret-left"></i>
    </button>

    <div className="movies">
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>

    <button className="btn btn-outline-primary pages">
      <i className="fas fa-caret-right"></i>
    </button>
  </div>
)

export default MovieList;