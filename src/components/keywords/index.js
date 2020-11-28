import React from "react";

const KeywordsList = ({keywords}) => {
  const keys = keywords.map(k => (
    <li key={k.id}>{k.name}</li>
  ));
  return <ul>{keys}</ul>;
};

export default KeywordsList;