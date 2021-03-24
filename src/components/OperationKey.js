import React from 'react';
import { useDispatch } from 'react-redux';
import { addOperation } from '../store/actions/calculator';

const OperationKey = (props) => {
    const dispatch = useDispatch();

    const introduceOperation = () => {
        dispatch(addOperation(props.operationKey));
    };

    return (
        <div id={props.identificator} className="key operation-key" onClick={introduceOperation}>
            {props.operationKey}
        </div>
    );
};

export default OperationKey;
