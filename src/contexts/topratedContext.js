import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTopRatingMovies } from "../api/movie-api";

export const TopratedMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const TopratedMoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTopRatingMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <TopratedMoviesContext.Provider
      value={{
        topratedmovies: state.movies,
        setAuthenticated
      }}
    >
      {props.children}
    </TopratedMoviesContext.Provider>
  );
};

export default TopratedMoviesContextProvider