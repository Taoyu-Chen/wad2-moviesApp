import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getMovieKeywords } from "../../store/actionCreators";
import useMovieKeywords from "../../hooks/useMovieKeywords";
import useMovie from "../../hooks/useMovie";
import Button from '@material-ui/core/Button';

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
      <Button variant="contained" color="primary"
        onClick={handleKewordsClick}
      >
        Show movies keywords
      </Button>
    </Link>
  );
};

export default KeyWordButton;