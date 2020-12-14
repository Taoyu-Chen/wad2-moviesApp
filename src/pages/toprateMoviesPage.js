
import React, { useState, useEffect } from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/materialuiTemplateMovieListPage';
import { getTopRatingMovies } from "../api/tmdb-api";
import CombineButton from '../components/buttons/combineButton';
import MaterialuiSiteHeader from '../components/materialuiSiteHeader/siteHeaderui';
const ToprateMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTopRatingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <> 
      <MaterialuiSiteHeader />
      <PageTemplate
        title='Top Rate Movies'
        movies={movies}
        action={(movie) => {
          return <CombineButton movie={movie} /> 
        }}
      />
    </>
  );
};

export default ToprateMoviesPage;