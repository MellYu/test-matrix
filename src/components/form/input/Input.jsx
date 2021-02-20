import React from "react";
import store from "./../../../redux/store";
import { v4 as uuidv4 } from "uuid";

export const Input = ({ inputLabel, inputHandler, val }) => {
  const setValueHandler = (param) => store.dispatch(inputHandler(param));

  return (
    <label htmlFor={uuidv4()}>
      {inputLabel}
      <input
        id={uuidv4()}
        type="number"
        onChange={(e) => setValueHandler(+e.target.value)}
        value={val}
      />
    </label>
  );
};
