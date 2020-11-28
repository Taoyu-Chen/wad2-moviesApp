"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSimilarMovies = exports.getTopRatingMovies = exports.getUpcomingMovies = exports.getMovieReviews = exports.getGenres = exports.getMovie = exports.getMovies = void 0;

var getMovies = function getMovies() {
  return fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&include_adult=false&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getMovies = getMovies;

var getMovie = function getMovie(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (res) {
    return res.json();
  });
};

exports.getMovie = getMovie;

var getGenres = function getGenres() {
  return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_TMDB_KEY + "&language=en-US").then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.genres;
  });
};

exports.getGenres = getGenres;

var getMovieReviews = function getMovieReviews(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "/reviews?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getMovieReviews = getMovieReviews;

var getUpcomingMovies = function getUpcomingMovies() {
  return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getUpcomingMovies = getUpcomingMovies;

var getTopRatingMovies = function getTopRatingMovies() {
  return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getTopRatingMovies = getTopRatingMovies;

var getSimilarMovies = function getSimilarMovies(id) {
  return fetch("https://api.themoviedb.org/3/movie/".concat(id, "/similar?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.results;
  });
};

exports.getSimilarMovies = getSimilarMovies;