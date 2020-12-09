"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieKeywords = exports.getSimilarMovies = void 0;

var _actionTypes = require("./actionTypes");

var getSimilarMovies = function getSimilarMovies(value) {
  return {
    type: _actionTypes.GET_SIMILAR_MOVIES,
    movies: value
  };
};

exports.getSimilarMovies = getSimilarMovies;

var getMovieKeywords = function getMovieKeywords(value1, value2) {
  return {
    type: _actionTypes.GET_MOVIE_KEYWORDS,
    keywords: value1,
    movie: value2
  };
};

exports.getMovieKeywords = getMovieKeywords;