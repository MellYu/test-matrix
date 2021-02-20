import { combineReducers, createReducer } from "@reduxjs/toolkit";
import matrixActions from "./matrixActions";

const addRowQuantity = (state, action) => {
  return { ...state, rowsNumber: action.payload };
};

const addNewRow = (state, action) => {
  console.log(action);
  return { ...state, rowsNumber: state.rowsNumber + 1 };
};

const deleteRow = (state, action) => {
  return { ...state, rowsNumber: state.rowsNumber - 1 };
};

const addColumnQuantity = (state, action) => {
  return { ...state, columnsNumber: action.payload };
};
const createMatrix = (state, action) => {
  {
    return { ...state, matrix: action.payload };
  }
};

const innitialState = {
  columnsNumber: 0,
  matrix: [],
  rowsNumber: 0,
}
const matrixReducer = createReducer(
  innitialState,
  {
    [matrixActions.addRowQuantity]: addRowQuantity,
    [matrixActions.addColumnQuantity]: addColumnQuantity,
    [matrixActions.createMatrix]: createMatrix,
    [matrixActions.addNewRowAct]: addNewRow,
    [matrixActions.deleteRow]: deleteRow
  }
);

export default combineReducers({
  matrixReducer,
});
