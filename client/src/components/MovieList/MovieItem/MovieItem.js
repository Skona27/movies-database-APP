import React from "react";

const MovieItem = props => (
  <div className="movie">
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.genre}</h6>
      <h6 className="card-subtitle mb-2 text-muted">{props.director}, {props.year}</h6>
      <h6 className="card-subtitle mb-2 text-muted">{props.rate} / 10</h6>
      <a href={'/movie/' + props.id} className="card-link">See more info</a>
    </div>
  </div>
  </div>
)

export default MovieItem;