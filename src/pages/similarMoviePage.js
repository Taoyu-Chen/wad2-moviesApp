
import React from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import useSimilarMovie from "../hooks/useSimilarMovie";
import ShowKeywords from '../components/buttons/showKeywords';
const SimilarMoviesPage = (props) => {
  const { id } = props.match.params;
  const [similarMovies] = useSimilarMovie(id)

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