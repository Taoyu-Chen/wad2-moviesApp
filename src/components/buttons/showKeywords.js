import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getMovieKeywords } from "../../store/actionCreators";
import useMovieKeywords from "../../hooks/useMovieKeywords";
import useMovie from "../../hooks/useMovie";

const KeyWordButton = ({ movie }) => {
  const movieid = movie.id;
  const [keywords] = useMovieKeywords(movieid);
  const [moviekey] = useMovie(movieid);
  const handleKewordsClick = () => {
    
    const action = getMovieKeywords(keywords, moviekey);
    
    store.dispatch(action)
  }
  return (
    <Link to={`/keywords/${movie.id}`}
      >
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleKewordsClick}
      >
          Look movies keywords
      </button>
    </Link>
  );
};

export default KeyWordButton;