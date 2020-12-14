import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as Lin} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import TopRateButton from './topRateButton';
import HomeButton from './homeButton';
import HomeButton from './Button';
import TheatersIcon from '@material-ui/icons/Theaters';
import FavoriteButton from './FavoriteButton';
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    padding: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft: 400
  },
  movieicon: {
    marginLeft: 500,
  },
  theatersicon: {
    margin: 20,
  },
}));
export default function SiteHeader() { 
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
          TMDB Client
          </Typography>
          <MovieIcon className={classes.movieicon}/>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          For the movie enthusiast !!
          </Typography>
          <TheatersIcon className={classes.theatersicon} />
          <Lin style={{ textDecoration:'none'}} to="/">
            <Link id="buy" variant="button" color="textPrimary" className={classes.link}>
              <HomeButton />
            </Link>
          </Lin>
            <Lin style={{ textDecoration:'none'}} to="/movies/upcoming">
              <UpcomingButton />
          </Lin>
          <Lin style={{ textDecoration:'none'}} to="/movies/favorites">
              <FavoriteButton />
            </Lin>
            <Lin style={{ textDecoration:'none'}} to="/movies/top_rated">
    
              <TopRateButton /> 
            </Lin>
            
          <Button color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
  );
}

