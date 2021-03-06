import { useEffect, useState } from "react";
import { getSimilarMovies } from '../api/movie-api';

const useSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getSimilarMovies(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default useSimilarMovies