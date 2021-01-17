import { useEffect, useState } from "react";
import { getTopRatingMovies } from '../api/tmdb-api';

const useTopratedMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTopRatingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);
  return [movies, setMovies];
};

export default useTopratedMovies