import React from "react";
import styles from "./row.module.css";

const RowTotal = ({ amount }) => <div className={styles.amount}>{amount}</div>;

export default RowTotal;
