import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { getSimilarMovies } from "../../store/actionCreators";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  similarbtn: {
    marginLeft: 5,
    marginRight: 5
  }
}));

const SimilarMovieButton = ({ movie }) => {
  const classes = useStyles();
  const movieid = movie.id;
  const [movies] = useSimilarMovies(movieid);
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
          similar
        </Button>
      </Link>
    </>
  );
};



export default SimilarMovieButton;
