import { useEffect, useState } from "react";
import { deleteSimilarMovie } from '../api/movie-api';

const useDelSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    deleteSimilarMovie(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default useDelSimilarMovies