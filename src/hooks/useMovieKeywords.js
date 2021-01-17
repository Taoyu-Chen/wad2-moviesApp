import { useEffect, useState } from "react";
import { getMovieKeywords } from '../api/movie-api';

const useMoiveKeyWord = id => {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    getMovieKeywords(id).then(keys => {
      setKeys(keys);
    });
  }, [id]);
  return [keys, setKeys];
};

export default useMoiveKeyWord