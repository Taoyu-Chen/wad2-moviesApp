
import React from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'

import useSimilarMovie from "../hooks/useSimilarMovie";
import SimilarMovieButton from '../components/buttons/SimilarMovieButton';
const SimilarMoviesPage = (props) => {
  const { id } = props.match.params;
  const [similarMovies] = useSimilarMovie(id)
  console.log(similarMovies);
  return (
      <PageTemplate
        title='Similar Movies'
        movies={similarMovies}
        action={(movie) => {
          return <SimilarMovieButton movie={movie} /> 
        }}
      />
  );
};

export default SimilarMoviesPage;