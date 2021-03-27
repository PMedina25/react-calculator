import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const DIGIT_LIMIT = 'DIGIT LIMIT MET';

const Display = () => {
    /* State hook wich handles the digit limit message */
    const [isDigit, setIsDigit] = useState(false);

    /* Display and isCalculated get from redux state */
    const displayValue = useSelector(state => state.display);
    const isCalculatedValue = useSelector(state => state.isCalculated);

    /**
     * Run everytime the display value changes.
     * It displays the message 'DIGIT LIMIT MET'
     * when we reach the limit of digits
     */
    useEffect(() => {
        if (displayValue.length >= 22 && !isCalculatedValue) {
            setIsDigit(true);
            setTimeout(() => {
                setIsDigit(false);
            }, 1000);
        }
    }, [displayValue])
    
    return (
        <div id="display">
            {isDigit ? DIGIT_LIMIT : displayValue}
        </div>
    );
};

export default Display;
