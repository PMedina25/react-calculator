import {
    CLEAR,
    CALCULATE,
    ADD_OPERAND,
    ADD_OPERATION
} from '../types';


/* Clear display and result */
export const clear = () => ({ type: CLEAR });

/* Introduce number with the key */
export const addOperand = (number) => ({ type: ADD_OPERAND, payload: number });

/* Add the operation to the display */
export const addOperation = (operation) => ({ type: ADD_OPERATION, payload: operation });

/* Calculate the operation */
export const calculate = (calculation) => ({ type: CALCULATE, payload: calculation });