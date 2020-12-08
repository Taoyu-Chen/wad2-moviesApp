import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getSimilarMovies } from "../../store/actionCreators";
const SimilarMovieButton = ({ movie }) => {
  const movieid = movie.id;
  const handleSimilarClickChange = () => {
    const action = getSimilarMovies(movieid);
    store.dispatch(action);
  }
  return (
    <Link 
      >
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleSimilarClickChange}
      >
          Look similar movies
      </button>
    </Link>
  );
};



export default SimilarMovieButton;