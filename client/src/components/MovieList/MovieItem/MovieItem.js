import React from "react";

const MovieItem = props => (
  <div className="movie">
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Titanic</h5>
      <h6 className="card-subtitle mb-2 text-muted">Action, Drama</h6>
      <h6 className="card-subtitle mb-2 text-muted">James Cameron, 2006</h6>
      <h6 className="card-subtitle mb-2 text-muted">8,2 / 10</h6>
      <a href="#" className="card-link">See more info</a>
    </div>
  </div>
  </div>
)

export default MovieItem;