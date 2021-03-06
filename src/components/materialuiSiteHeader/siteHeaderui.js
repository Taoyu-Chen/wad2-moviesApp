import React from "react";
import "../../globals/fontawesome";
import "./movieui.css";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as Lin} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import TopRateButton from './topRateButton';
import HomeButton from './homeButton';
import UpcomingButton from './upcomingButton';
import TheatersIcon from '@material-ui/icons/Theaters';
import FavoriteButton from './FavoriteButton';
import { useAuth } from "../../contexts/authContext";
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
    marginLeft: 60,
    marginTop: 0
  },
  toolbarTMDB: {
    flexGrow: 1
  },
  movieicon: {
    margin: 10,
    marginLeft: 30
  },
  theatersicon: {
    margin: 20,
  },
  buttonlink: {
    marginLeft :20
  }
}));
const SiteHeader = () => {
  const classes = useStyles();
  const { currentUser, logout, signout} = useAuth()
  async function handleLogout() {
    await logout()
    await signout()
  }
  return (
    <nav className="navbar  navbar-light fixed-top  bg-light ">
      <nav className="navbar-brand text-white">
        <Lin to="/">
          <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTMDB}>
            TMDB Client
          </Typography>
          
        </Lin>
      </nav>
      <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTMDB}>
            <div data-cy="email">{currentUser.email}</div>
          </Typography>
      <MovieIcon className={classes.movieicon}/>
      <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
        For the movie enthusiast !!
      </Typography>
      <TheatersIcon className={classes.theatersicon} />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">

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

          <li>
            <Lin style={{ textDecoration:'none'}} to="/signup">
          <Button data-cy="signupButton"color="primary" variant="outlined" >
                SignUp
          </Button>
            </Lin>
          <Lin style={{ textDecoration:'none'}} to="/login">
          <Button color="primary" data-cy="logoutButton" variant="outlined" onClick={handleLogout} className={classes.buttonlink}>
              LogOut 
          </Button>
              </Lin>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;