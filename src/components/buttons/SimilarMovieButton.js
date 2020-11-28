import React from "react";
import { Link } from "react-router-dom";
const SimilarMovieButton = ({ movie,id }) => {

  return (
    <Link to={`/similar/${movie.id}`}
      >
      <button
        type="button"
        className="btn w-100 btn-primary"
      >
          Look similar movies
      </button>
    </Link>
  );
};

export default SimilarMovieButton;