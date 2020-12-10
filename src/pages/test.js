import React from "react";
import store from '../store';

const Test = () => {

  const i = store.getState().movies;
  console.log(i);
  return (
    <>
      
    </>
    
  );
};

export default Test;