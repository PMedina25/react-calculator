import React from 'react';
import { useDispatch } from 'react-redux';
import { addOperand } from '../store/actions/calculator';

const NumberKey = (props) => {
    /* Dispatch hook which is used to dispatch redux actions */
    const dispatch = useDispatch();

    /* Arrow function which dispatch the add operand action */
    const introduceNumber = (numberKey) => {
        dispatch(addOperand(numberKey));
    };

    return (
        <a id={props.identificator} className="key number-key" onClick={() => introduceNumber(props.numberKey)}>
            {props.numberKey}
        </a>
    );
};

export default NumberKey;
