import React from 'react'

const NumberKey = (props) => {
    return (
        <div id={props.identificator} className="key number-key">
            {props.numberKey}
        </div>
    );
};

export default NumberKey;
