import React, { useState } from "react";
import { connect } from "react-redux";
import store from "./../../redux/store";
import matrixActions from "./../../redux/matrix/matrixActions";
import styles from "./matrixBtn.module.css";

const MatrixBtn = ({ matrix, Amount, id, percentage }) => {
  const [isPercentageShow, setPercentageShow] = useState(false);

  const percentageToSrt = (percent) => `${Number(percent * 100).toFixed(1)}%`;

  const percentageStyle = {
    backgroundImage: `linear-gradient(to top, red 0% ${percentageToSrt(
      percentage
    )}, white ${percentageToSrt(percentage)} 100%)`,
    color: "black",
  };

  const onClickMatrixBtn = (id) => {
    const incrementItemAmount = (item) =>
      item.id === id ? { ...item, Amount: item.Amount + 1 } : item;
    store.dispatch(matrixActions.createMatrix(matrix.map(incrementItemAmount)));
  };

  const onMouseEnterHandler = () => setPercentageShow(true);

  const onMouseLeaveHandler = () => setPercentageShow(false);

  return (
    <button
      type="button"
      style={isPercentageShow ? percentageStyle : {}}
      className={styles.btn}
      onClick={() => onClickMatrixBtn(id)}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {isPercentageShow ? (
        <span>{percentageToSrt(percentage)}</span>
      ) : (
        <span>{Amount}</span>
      )}
    </button>
  );
};

const mapStateToProps = (state, props) => ({
  Amount: props.matrixItem.Amount,
  id: props.matrixItem.id,
  matrix: state.matrixReducer.matrix,
  percentage: props.percentage,
});

export default connect(mapStateToProps)(MatrixBtn);
