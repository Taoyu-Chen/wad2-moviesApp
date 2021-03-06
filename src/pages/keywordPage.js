
import React from "react";
//import StubAPI from "../api/stubAPI";
import MovieDetailsWithKeywords from "../components/movieDetailsWithKeywords";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import store from '../store';
import useMovie from "../hooks/useMovie";
import { Link, Route, withRouter } from "react-router-dom";
import MaterialuiSiteHeader from '../components/materialuiSiteHeader/siteHeaderui';

const KeywordsPage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id) 
  const keywords = store.getState().keywords;
  console.log(keywords);
  return (
    <>
      <MaterialuiSiteHeader />
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetailsWithKeywords movie={movie} keywords={keywords} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(KeywordsPage);