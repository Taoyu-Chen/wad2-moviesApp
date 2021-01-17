import { useEffect, useState } from "react";
import { deleteTopratedMovies } from '../api/movie-api';

const delSimilarMovies = id => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    deleteTopratedMovies(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default delSimilarMovies