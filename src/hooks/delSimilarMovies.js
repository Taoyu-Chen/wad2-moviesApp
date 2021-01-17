import { useEffect, useState } from "react";
import { deleteSimilarMovies } from '../api/movie-api';

const useDelSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    deleteSimilarMovies(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default useDelSimilarMovies