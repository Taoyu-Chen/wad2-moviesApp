import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getSimilarMovies } from "../../store/actionCreators";
import useSimilarMovie from "../../hooks/useSimilarMovie";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  similarbtn: {
    marginLeft: 30
  }
}));

const SimilarMovieButton = ({ movie }) => {
  const classes = useStyles();
  const movieid = movie.id;
  const [movies] = useSimilarMovie(movieid);
  const handleSimilarClickChange = () => {
    
    const action = getSimilarMovies(movies);
    
    store.dispatch(action)
  }
  return (
    <>
      <Link to={`/similar/${movie.id}`}>
        <Button variant="contained" color="primary"
          onClick={handleSimilarClickChange}
          className={classes.similarbtn}
          data-cy="similarMovieButton">
          similar movies
        </Button>
      </Link>
    </>
  );
};



export default SimilarMovieButton;