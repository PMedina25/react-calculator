import {
    CLEAR,
    ADD_OPERAND,
    ADD_OPERATION,
    CALCULATE
} from '../types';

const initialState = {
    display: 0,
    result: null,
    isCalculated: false
};


/**
 * Calculator reducer
 */
export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR:
            return {
                display: 0,
                result: null,
                isCalculated: false
            };
        case ADD_OPERAND:
            /* Current display value of the calculator */
            const currentDisplayValue = state.display;

            /* We concatenate the current value of the display with the digit introduce  */
            let displayValue = currentDisplayValue.toString() + action.payload.toString();

            /* If the display value is 0 or an operation, replace it with the first digit of the operand */
            if (currentDisplayValue === 0 || isOperation(currentDisplayValue)) {
                displayValue = action.payload.toString();
            }

            /* If the number of digits reach 22, it stops adding numbers to the operand */
            if (displayValue.length >= 22) {
                displayValue = currentDisplayValue.toString();
            } 

            /* We save the result value, concatenating the previous value with the new one introduced */
            let result = state.result + action.payload.toString();

            /* If the result is null, we put directly the value introduced */
            if (state.result === null) {
                result = action.payload;
            }

            if (state.isCalculated) {
                displayValue = action.payload;
                result = action.payload;
            }

            return {
                ...state,
                display: displayValue,
                result,
                isCalculated: false
            };
        case ADD_OPERATION: 
            /* Current display value of the calculator */
            const currentResultValue = state.result;

            /* Variable which stores the value of the result */
            let resultValue;

            /* If the current result value is null, initialize the result value with the operation introduced */
            if (currentResultValue === null) {
                resultValue = action.payload;
            }
            /* If the last key entered is an operation, it replaces that operation with the new one introduced */
            else if (isOperation(currentResultValue.charAt(currentResultValue.length - 1))) {
                let resultArr = currentResultValue.split('');
                resultArr[resultArr.length - 1] = action.payload;
                resultValue = resultArr.join('');
            }
            /* If the display value has just digits, we concatenate them with the operation */
            else {
                resultValue = currentResultValue.toString() + action.payload;
            }

            /* If a number has been calculated previously, and we enter another operation, it retains just the previous result */
            if (state.isCalculated) {
                resultValue = state.display + action.payload;
            }

            return {
                ...state,
                display: action.payload,
                result: resultValue,
                isCalculated: false
            };
        case CALCULATE: 
            /* Current result value of the calculator */
            const finalResult = eval(state.result).toString();

            return {
                display: finalResult,
                result: state.result + '=' + finalResult,
                isCalculated: true
            };
        default:
            return state;
    }
};


/**
 * Check if the char input is an operation or not
 * @param {Char} operation 
 * @returns boolean
 */
const isOperation = (operation) => {
    if (operation === '+' ||
        operation === '-' ||
        operation === '/' ||
        operation === '*') {
            return true;
        }
    return false;
}