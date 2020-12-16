import React from "react";
import ShowKeywords from "./showKeywords";
import SimilarMovieButton from "./similarMovieButton";


const KeyWordButton = ({ movie }) => {

  return (
    <>
      <ShowKeywords movie={movie} />
      <SimilarMovieButton movie={movie}  />
    </>
  );
};

export default KeyWordButton;