import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from '../store/actions/calculator';

const EqualsKey = () => {
    const dispatch = useDispatch();
    
    const resultValue = useSelector(state => state.result);

    const calculation = () => {
        dispatch(calculate(resultValue));
    };

    return (
        <div id="equals" className="key" onClick={calculation}>
            =
        </div>
    );
};

export default EqualsKey;
