import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginLeft: 25,
    maxWidth: 350,
    marginBottom: 20 
  },
  media: {
    height: 520,
    width: 350
  },
});
const MovieCard = ({movie, action}) => {
  const classes = useStyles();
  return (
    <div data-cy="moviecard" className="col-sm-3">
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/movies/${movie.id}`}>
            <CardMedia
                className={classes.media}
                image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "./film-poster-placeholder.png"
              }
            />
          </Link>
        <CardContent>
          
        
          <Typography variant="body2" color="textSecondary" component="p">
            <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {action(movie)}
        </Button>

      </CardActions>
    </Card>
    </div>
  );
};

export default MovieCard;