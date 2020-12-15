import React from "react";
import Movieui from "../materialuiMovieCard";
import "./movieList.css";

const MovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movieui key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-dark">{movieCards}</div>;
};

export default MovieList;