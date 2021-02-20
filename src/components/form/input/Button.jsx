import React from "react";
import styles from "./button.module.css";
export const Button = ({ handleClick, name }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {name}
    </button>
  );
};
