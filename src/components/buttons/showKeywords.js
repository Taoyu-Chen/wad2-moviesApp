import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getMovieKeywords } from "../../store/actionCreators";
import useMovieKeywords from "../../hooks/useMovieKeywords";
import useMovie from "../../hooks/useMovie";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  keywordsbtn: {
    marginLeft: 20
  }
}));
const KeyWordButton = ({ movie }) => {
  const classes = useStyles();
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
        className={classes.keywordsbtn}
      >
        movies keywords
      </Button>
    </Link>
  );
};

export default KeyWordButton;