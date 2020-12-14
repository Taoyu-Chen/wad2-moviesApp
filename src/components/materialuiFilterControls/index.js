import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginLeft: 100 
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  inputControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginLeft: 10
  },
  listText: {
    marginTop: 35
  },
  genreText: {
    marginTop: 35,
    marginLeft: 20,
    marginRight: -100
  }
}));

const FilterControls = props => {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('genre filter');
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <FormControl className={classes.listText}>
            <span>List Filtering:</span>
          </FormControl>
          <FormControl className={classes.inputControl}>
            <span></span>
            <InputLabel
            htmlFor="demo-customized-textbox"
            >Title Search</InputLabel>
            <BootstrapInput id="demo-customized-textbox"
            onChange={handleTextChange}/>
          </FormControl>
          <FormControl className={classes.genreText}>
            <span>Genre:</span>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genres:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select genre"
              value={genre.name}
              placeholder="Genre Search"
              onChange={handleGenreChange}
              input={<BootstrapInput value="material"/>}
            >
              {context.genres.map(genre => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
              })}
            </Select>
          </FormControl>
          
        </h4>
      </div>
    </div>
  );
};

export default FilterControls;