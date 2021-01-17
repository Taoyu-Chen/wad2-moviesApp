import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import store from '../../store';
import { getTopratedMovies } from "../../store/actionCreators";
import useTopratedMovie from "../../hooks/useTopratedMovies";
export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [movies] = useTopratedMovie();
  const handleClick = () => {
    setOpen(true);
    const action = getTopratedMovies(movies);
    
    store.dispatch(action)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button id="top_rate" onClick={handleClick}>Top Rate Movies</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}