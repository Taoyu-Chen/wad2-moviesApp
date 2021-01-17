import React from "react";
import ShowKeywords from "./showKeywords";
import SimilarMovieButton from "./similarMoviesButton";
import DeleteSimilarMovieButton from "./delSimilarMovieButton"

const KeyWordButton = ({ movie }) => {

  return (
    <>
      <ShowKeywords movie={movie} />
      <SimilarMovieButton movie={movie} />
      <DeleteSimilarMovieButton movie={movie}  />
    </>
  );
};

export default KeyWordButton;