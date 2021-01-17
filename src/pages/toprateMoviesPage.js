
import React, { useState, useEffect } from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/materialuiTemplateMovieListPage';
//import { getTopRatingMovies } from "../api/tmdb-api";
import CombineButton from '../components/buttons/combineButton';
import store from '../store';
import MaterialuiSiteHeader from '../components/materialuiSiteHeader/siteHeaderui';
const ToprateMoviesPage = () => {
  const topratedMovies = store.getState().topratedMovies;
  console.log(topratedMovies);

  return (
    <> 
      <MaterialuiSiteHeader />
      <PageTemplate
        title='Top Rate Movies'
        movies={topratedMovies}
        action={(movie) => {
          return <CombineButton movie={movie} /> 
        }}
      />
    </>
  );
};

export default ToprateMoviesPage;