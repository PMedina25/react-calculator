import React from 'react';
import { useDispatch } from 'react-redux';
import { clear } from '../store/actions/calculator';

const ClearKey = () => {
    const dispatch = useDispatch();

    const clearDisplay = () => {
        /* Dispatch clear */
        dispatch(clear());
    };

    return (
        <div id="clear" className="key" onClick={clearDisplay}>
            AC
        </div>
    );
};

export default ClearKey
