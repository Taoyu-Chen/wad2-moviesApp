
import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatingMovies } from "../api/tmdb-api";

const ToprateMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTopRatingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate
        title='Top Rate Movies'
        movies={movies}
        buttonHandler={addToFavorites}
      />
  );
};

export default ToprateMoviesPage;