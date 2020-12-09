import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import SiteHeader from '../components/siteHeader';

const FavoriteMoviesPage = props => {
const context = useContext(MoviesContext);
const favorites = context.movies.filter( m => m.favorite )
    return (
        <>
            <SiteHeader />  
            <MovieListPageTemplate
                movies={favorites}
                title={"Favorite Movies"}
                action={movie => <AddReviewButton movie={movie} />}
            />
        </>
    );
};

export default FavoriteMoviesPage;