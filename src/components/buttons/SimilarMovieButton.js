import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getSimilarMovies } from "../../store/actionCreators";
import useSimilarMovie from "../../hooks/useSimilarMovie";
const SimilarMovieButton = ({ movie }) => {
  const movieid = movie.id;
  const [movies] = useSimilarMovie(movieid);
  const handleSimilarClickChange = () => {
    
    const action = getSimilarMovies(movies);
    
    store.dispatch(action)
  }
  return (
    <>
      <Link to={`/similar/${movie.id}`}>
        <button
          type="button"
          className="btn w-100 btn-primary"
          onClick={handleSimilarClickChange}
        >
            Look similar movies
        </button>
      </Link>
    </>
  );
};



export default SimilarMovieButton;