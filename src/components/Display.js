import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    const displayValue = useSelector(state => state.display)

    return (
        <div id="display">
            {displayValue}
        </div>
    );
};

export default Display;
