import { useEffect, useState } from "react";
import { getTopRatingMovies } from '../api/movie-api';

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