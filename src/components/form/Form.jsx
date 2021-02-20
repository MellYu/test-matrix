import React from "react";
import { connect } from "react-redux";
import { Input } from "./input/Input";
import matrixActions from "./../../redux/matrix/matrixActions";
import { Button } from "./input/Button";
import styles from "./form.module.css";

const inputsArray = [
  {
    action: matrixActions.addRowQuantity,
    text: "Row Number",
  },
  {
    action: matrixActions.addColumnQuantity,
    text: "Column Number",
  },
];

const inputField = (label) => (
  <Input
    key={label.text.split(" ").join("")}
    inputLabel={label.text}
    inputHandler={label.action}
    val={label.value}
  />
);

const Form = ({
  columnsNumber,
  rowsNumber,
  matrix,
  onIncrement,
  onDecrement,
}) => {
  inputsArray[0].value = rowsNumber;
  inputsArray[1].value = columnsNumber;
  return (
    <>
      <form className={styles.form}>{inputsArray.map(inputField)}</form>
      {matrix.length > 0 ? (
        <>
          <Button handleClick={onIncrement} name="Add new row" />
          <Button handleClick={onDecrement} name="Delete row" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  columnsNumber: state.matrixReducer.columnsNumber,
  highlightCellsNumber: state.matrixReducer.highlightCellsNumber,
  rowsNumber: state.matrixReducer.rowsNumber,
  matrix: state.matrixReducer.matrix,
});

const mapDispatchToProps = {
  onIncrement: matrixActions.addNewRowAct,
  onDecrement: matrixActions.deleteRow,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
