import { useEffect, useState } from "react";
import { deleteSimilarMovies } from '../api/movie-api';

const delSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    deleteSimilarMovies(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default delSimilarMovies