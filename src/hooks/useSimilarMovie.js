import { useEffect, useState } from "react";
import { getSimilarMovies } from '../api/tmdb-api';

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