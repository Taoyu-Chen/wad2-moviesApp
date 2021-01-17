import { useEffect, useState } from "react";
import { deleteTopratedMovies } from '../api/movie-api';

const useDelSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    deleteTopratedMovies(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default useDelSimilarMovies