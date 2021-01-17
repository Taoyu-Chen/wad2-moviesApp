import { useEffect, useState } from "react";
import { deleteTopratedMovie } from '../api/movie-api';

const useDelSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    deleteTopratedMovie(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default useDelSimilarMovies