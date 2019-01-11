import React from "react";
import MovieItem from "./MovieItem/MovieItem";

const MovieList = props => {
  let movies;

  if (props.movies) {
    movies = props.movies.map(movie => {
      return <MovieItem {...movie}/>
    })
  } else {
    movies = "Loading";
  }

  let prevLink, nextLink;

  if (props.links) {
    console.log(props.links);
    props.links.forEach(link => {
      switch(link.rel) {
        case "next": 
        nextLink =  (
          <button className="btn btn-outline-primary pages" onClick={() => props.changePage(link.href)}>
            <i className="fas fa-caret-right"></i>
          </button>)
          break;
        case "prev":
          prevLink = (
          <button className="btn btn-outline-primary pages" onClick={() => props.changePage(link.href)}>
            <i className="fas fa-caret-left"></i>
          </button>)
          break;
      }
    })
  }

  return (
    <div className="movies moviesList">
      {prevLink}

      <div className="movies">
        {movies}
      </div>

      {nextLink}
    </div>
  )
}

export default MovieList;