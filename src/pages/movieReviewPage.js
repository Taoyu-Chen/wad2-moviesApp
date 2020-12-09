import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";
import SiteHeader from '../components/siteHeader';

const MovieReviewPage = (props) => {
  return (
    <>
      <SiteHeader /> 
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </PageTemplate>
    </>
  );
};

export default MovieReviewPage;