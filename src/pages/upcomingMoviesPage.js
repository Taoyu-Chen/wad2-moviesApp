  
import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
import SiteHeader from '../components/siteHeader';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  
    return !("watchList" in m);
  });
  console.log(upcoming);
  return (
    <>
      <SiteHeader />  
      <PageTemplate
        title='Upcoming Movies'
        movies={upcoming}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} /> 
        }}
      />
    </>
  );
};

export default MovieListPage;