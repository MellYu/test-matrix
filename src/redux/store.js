import { configureStore } from '@reduxjs/toolkit';
import reducer from './matrix/matrixReducer';

const store = configureStore({
    reducer, 
});

export default store;