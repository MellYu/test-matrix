import React, { useEffect, useDispatch } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MatrixBtn from "../matrixBtn/MatrixBtn";
import RowTotal from './../rowTotal/rowTotal';
import ColumnAverage from './../columnAverage/columnAverage';
import matrixActions from "./../../redux/matrix/matrixActions";
import store from "./../../redux/store";

import styles from './matrix.module.css';

const randomNumber = () => ({
  Amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
  id: uuidv4(),
});

const Matrix = ({
  columnsNumber,
  matrix,
  rowsNumber,
}) => {

  useEffect(() => {
    const filedMatrix = Array(columnsNumber * rowsNumber).fill(0).map(randomNumber);
    store.dispatch(matrixActions.createMatrix(filedMatrix));
  }, [columnsNumber, rowsNumber]);

  const gridShape = {
    gridTemplateColumns: `repeat(${columnsNumber + 1}, 1fr)`,
    gridTemplateRows: `repeat(${rowsNumber + 1}, 1fr)`,
  };

  const rowTotal = Array(rowsNumber).fill(0).map((item, rowIndex) => matrix.reduce((acc, mat, i) => {
    if ((i >= rowIndex * columnsNumber) && (i < (rowIndex + 1) * columnsNumber)) {
      return acc + mat.Amount;
    }
    return acc;
  }, 0));

  let columnAverage = [];
  if (rowTotal.length) {
    columnAverage = Array(columnsNumber).fill(0).map((item, columnIndex) => {
      let acc = 0;
      for (let i = columnIndex; i <= columnsNumber * rowsNumber - 1; i += columnsNumber) {
        acc += typeof matrix[i] === 'undefined' ? 0 : matrix[i].Amount;
      }
      return Math.floor(acc / rowsNumber);
    });
  }


  return (
    <div className={styles.matrix} style={gridShape}>
      {matrix.map((item, index) => (
        ((index % columnsNumber) === (columnsNumber - 1))
          ? (
            <>
              <MatrixBtn
                key={item.id}
                matrixItem={item}
                percentage={item.Amount / rowTotal[Math.floor(index / columnsNumber)]}
              />
              <RowTotal
                key={uuidv4()}
                amount={rowTotal[Math.floor(index / columnsNumber)]}
              />
            </>
          )
          : (
            <MatrixBtn
              key={item.ID}
              matrixItem={item}
              percentage={item.Amount / rowTotal[Math.floor(index / columnsNumber)]}
            />
          )
      ))}
      {columnAverage.map((item) => (
        <ColumnAverage
          key={uuidv4()}
          amount={item}
        />
      ))}
    </div>
  );
};


const mapStateToProps = (state) => ({
  matrix: state.matrixReducer.matrix,
  columnsNumber: state.matrixReducer.columnsNumber,
  rowsNumber: state.matrixReducer.rowsNumber,
});

export default connect(mapStateToProps)(Matrix);
