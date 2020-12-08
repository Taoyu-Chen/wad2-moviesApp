
import React from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import ShowKeywords from '../components/buttons/showKeywords';
import store from '../store';
const SimilarMoviesPage = (props) => {

  const similarMovies = store.getState().movies;
  console.log(similarMovies);
  return (
      <PageTemplate
        title='Similar Movies'
        movies={similarMovies}
        action={(movie) => {
          return <ShowKeywords movie={movie}/> 
        }}
      />
  );
};

export default SimilarMoviesPage;