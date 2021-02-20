import React from "react";
import styles from "./column.module.css";

const ColumnAverage = ({ amount }) => (
  <div className={styles.column}>{amount}</div>
);

export default ColumnAverage;
