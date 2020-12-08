"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSimilarMovies = void 0;

var _actionTypes = require("./actionTypes");

var getSimilarMovies = function getSimilarMovies(value) {
  return {
    type: _actionTypes.GET_SIMILAR_MOVIES,
    movieid: value
  };
};

exports.getSimilarMovies = getSimilarMovies;