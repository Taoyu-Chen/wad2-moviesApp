import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";   // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage';       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/authContext';
import TopratedMoviesPage from './pages/toprateMoviesPage';
import SimilarMoviePage from './pages/similarMoviePage';
import KeywordsPage from './pages/keywordPage';
import { Provider } from 'react-redux';
import store from './store';
import {persistor} from './store'
import {PersistGate} from 'redux-persist/lib/integration/react';
import Test from './pages/test';
import Signup from "./firebase/Signup";
import Login from "./firebase/Login";
import PriviteRoute from './firebase/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <div className="container-fluid">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <MoviesContextProvider> 
                <GenresContextProvider>
                  <AuthProvider>
                    <Switch>
                      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                      <Route path="/reviews/:id" component={MovieReviewPage} />
                      <PriviteRoute path="/similar/:id" component={SimilarMoviePage} />
                      <PriviteRoute path="/keywords/:id" component={KeywordsPage} />
                      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                      <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                      <PriviteRoute exact path="/movies/top_rated" component={TopratedMoviesPage} />
                      <PriviteRoute exact path="/test" component={Test} />
                      <Route path="/movies/:id" component={MoviePage} />
                      <Route path="/login" component={Login} />
                      <Route path="/signup" component={Signup} />
                      <Route path="/" component={HomePage} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </AuthProvider>
                </GenresContextProvider> 
              </MoviesContextProvider> 
            </PersistGate>
          </Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));