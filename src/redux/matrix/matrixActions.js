import { createAction } from "@reduxjs/toolkit";

const createMatrix = createAction('createMatrix');
const addRowQuantity = createAction('addRowQuantity');
const addColumnQuantity = createAction('addColumnQuantity');
const addNewRowAct = createAction('addNewRowAct');
const deleteRow = createAction('deleteRow')

export default {
    createMatrix,
    addRowQuantity,
    addColumnQuantity,
    addNewRowAct,
    deleteRow
}
