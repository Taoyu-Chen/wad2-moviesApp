import { useEffect, useState } from "react";
import { getMovieKeyword } from '../api/tmdb-api';

const useMoiveKeyWord = id => {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    getMovieKeyword(id).then(keys => {
      setKeys(keys);
    });
  }, [id]);
  return [keys, setKeys];
};

export default useMoiveKeyWord