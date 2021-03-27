import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from '../store/actions/calculator';

const EqualsKey = () => {
    /* Dispatch hook which is used to dispatch redux actions */
    const dispatch = useDispatch();
    
    /* Result value get from the redux state */
    const resultValue = useSelector(state => state.result);

    /* Arrow function which dispatch the calculate action */
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
