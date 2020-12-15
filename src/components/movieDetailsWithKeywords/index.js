import React from "react";
import "./movieDetails.css";
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));


export default ({ movie,keywords }) => {
  const classes = useStyles();
  return (
    <div>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" >
          <Chip label={movie.runtime} />
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" >
          <Chip label={movie.release_date} />
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genres.map(g => (
          <li key={g.name} >
            <Chip label={g.name} />
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {movie.spoken_languages.map(lang => (
          <li key={lang.name} >
            <Chip label={lang.name} />
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {movie.production_companies.map(pc => (
          <li key={pc.name}>
            <Chip label={pc.name} />
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pct" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pct => (
          <li key={pct.name}>
            <Chip label={pct.name} />
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pct" className="list-group-item list-group-item-dark">
          keywords
        </li>
        <div className={classes.root}>
        {keywords.map(k => (
          <li key={k.name}>
            <Chip label={k.name} />
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};