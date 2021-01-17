import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import { delSimilarMovie } from "../../store/actionCreators";
import useDelSimilarMovies from "../../hooks/delSimilarMovies";
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
  const [movies] = useDelSimilarMovies(movieid);
  const handleDelClick = () => {
    
    const action = delSimilarMovie(movies);
    
    store.dispatch(action)
  }
  return (
    <Link to={`/similar/${movie.id}`}
    >
      <Button variant="contained" color="primary"
        data-cy="keywordsButton"
        onClick={handleDelClick}
        className={classes.keywordsbtn}
      >
        delete
      </Button>
    </Link>
  );
};

export default KeyWordButton;