import React from "react";
import { Link } from "react-router-dom";

const KeyWordButton = ({ movie }) => {

  return (
    <Link to={`/keywords/${movie.id}`}
      >
      <button
        type="button"
        className="btn w-100 btn-primary"
      >
          Look movies keywords
      </button>
    </Link>
  );
};

export default KeyWordButton;