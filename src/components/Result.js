import React from 'react';
import { useSelector } from 'react-redux';
 
const Result = () => {
    const result = useSelector(state => state.result);

    return (
        <div id="result">
            <span>{result}</span>
        </div>
    );
};

export default Result;
