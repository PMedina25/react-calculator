import React from 'react';
import { useDispatch } from 'react-redux';
import { addOperand } from '../store/actions/calculator';

const NumberKey = (props) => {
    const dispatch = useDispatch();

    const introduceNumber = () => {
        dispatch(addOperand(props.numberKey));
    };

    return (
        <a id={props.identificator} className="key number-key" onClick={introduceNumber}>
            {props.numberKey}
        </a>
    );
};

export default NumberKey;
