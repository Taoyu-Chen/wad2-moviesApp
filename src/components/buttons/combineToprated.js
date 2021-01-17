import React from "react";
import ShowKeywords from "./showKeywords";
import SimilarMovieButton from "./similarMoviesButton";
import DeleteTopratedMovieButton from "./delTopratedMovieButton"

const KeyWordButton = ({ movie }) => {

  return (
    <>
      <ShowKeywords movie={movie} />
      <SimilarMovieButton movie={movie} />
      <DeleteTopratedMovieButton movie={movie}  />
    </>
  );
};

export default KeyWordButton;