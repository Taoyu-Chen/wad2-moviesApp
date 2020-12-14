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
    marginLeft: 30,
    maxWidth: 520
  },
  media: {
    height: 700,
    width: 520
  },
});
const MovieCard = ({movie, action}) => {
  const classes = useStyles();
  return (
    <div className="col-sm-3">
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        <CardContent>
          <Link to={`/movies/${movie.id}`}>
        
        </Link>
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