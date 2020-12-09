import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from '../components/reviewForm'
import SiteHeader from './components/siteHeader';

const ReviewFormPage = props => {

  return (
    <>
      <SiteHeader />  
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
    </>
  );
};
export default ReviewFormPage;