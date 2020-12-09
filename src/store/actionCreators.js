import { GET_MOVIE_KEYWORDS, GET_SIMILAR_MOVIES, GET_TOPRATED_MOVIES } from './actionTypes';

export const getSimilarMovies = (value) => ({
  type: GET_SIMILAR_MOVIES,
  movies : value
})

export const getMovieKeywords = (value) => ({
  type: GET_MOVIE_KEYWORDS,
  movies : value
})