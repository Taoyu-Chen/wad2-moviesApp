
import React, { useState, useEffect } from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatingMovies } from "../api/tmdb-api";
import SimilarMovieButton from '../components/buttons/similarMovieButton';

const ToprateMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTopRatingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
      <PageTemplate
        title='Top Rate Movies'
        movies={movies}
        action={(movie) => {
          return <SimilarMovieButton movie={movie} /> 
        }}
      />
  );
};

export default ToprateMoviesPage;