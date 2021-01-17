import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { delTopratedMovie } from "../../store/actionCreators";
import useDelTopratedMovies from "../../hooks/delSimilarMovies";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  keywordsbtn: {
    marginLeft: 2
  }
}));
const KeyWordButton = ({ movie }) => {
  const classes = useStyles();
  const movieid = movie.id;
  const [movies] = useDelTopratedMovies(movieid);
  const handleKewordsClick = () => {
    
    const action = delTopratedMovie(movies);
    store.dispatch(action)
  }
  return (
    <Link to={`/movies/top_rated`}
    >
      <Button variant="contained" color="primary"
        data-cy="keywordsButton"
        onClick={handleKewordsClick}
        className={classes.keywordsbtn}
      >
        del
      </Button>
    </Link>
  );
};

export default KeyWordButton;