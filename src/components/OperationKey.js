import React from 'react'

const OperationKey = (props) => {
    return (
        <div id={props.identificator} className="key operation-key">
            {props.operationKey}
        </div>
    );
};

export default OperationKey;
