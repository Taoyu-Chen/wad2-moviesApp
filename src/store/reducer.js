
import {GET_MOVIE_KEYWORDS, GET_SIMILAR_MOVIES, GET_TOPRATED_MOVIES} from './actionTypes'
const defaultState = {
  movie: [],
  topratedMovies: [],
  similarMovies: [],
  keywords: []
};

export default (state = defaultState, action) => {
  if (action.type === GET_SIMILAR_MOVIES) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.similarMovies = action.similarMovies;
    return newState;
  }
  if (action.type === GET_TOPRATED_MOVIES) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.topratedMovies = action.topratedMovies;
    return newState;
  }
  if (action.type === GET_MOVIE_KEYWORDS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.keywords = action.keywords;
    newState.movie = action.movie;
    return newState;
  }

  return state;
}