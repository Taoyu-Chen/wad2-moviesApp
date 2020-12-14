
import React from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/materialuiTemplateMovieListPage'
import ShowKeywords from '../components/buttons/showKeywords';
import CombineButton from '../components/buttons/combineButton';
import store from '../store';
import MaterialuiSiteHeader from '../components/materialuiSiteHeader/siteHeaderui';
const SimilarMoviesPage = (props) => {

  const similarMovies = store.getState().movies;
  console.log(similarMovies);
  return (
    <>
      <MaterialuiSiteHeader />
      <PageTemplate
        title='Similar Movies'
        movies={similarMovies}
        action={(movie) => {
          return <CombineButton movie={movie}/> 
        }}
      />
    </>
  );
};

export default SimilarMoviesPage;