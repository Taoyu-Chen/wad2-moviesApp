
import {GET_MOVIE_KEYWORDS, GET_SIMILAR_MOVIES, GET_TOPRATED_MOVIES} from './actionTypes'
import useSimilarMovie from "../hooks/useSimilarMovie";
const defaultState = {
  movieid: 0,
  movies: [],
  keywords: []
};

export default (state = defaultState, action) => {
  if (action.type === GET_SIMILAR_MOVIES) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.movieid = action.movieid;
    newState.movies = useSimilarMovie(action.movieid);
    return newState;
  }
  if (action.type === GET_TOPRATED_MOVIES) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.movieId = action.value;
    return newState;
  }
  if (action.type === GET_MOVIE_KEYWORDS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.movieId = action.value;
    return newState;
  }

  return state;
}