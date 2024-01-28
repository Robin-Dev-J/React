import React, { useState, useRef, useEffect } from "react";

const Reference = () => {
    const [BatchSize, updateBatchSize] = useState('');
    const prevBatch = useRef(BatchSize);

    useEffect(() => {
        prevBatch.current = BatchSize;
    }, [BatchSize]);

    return (
        <div style={divStyle}>
            <h1>This is an example of UseRef</h1>
            <input style={inputStyle} type="Number" placeholder="Enter your present innings Score"  onChange={(event) => updateBatchSize(event.target.value)}/>
            <br></br>
            <h2>The runs you scored in the current innings: {BatchSize}</h2>
            <h2>The runs you scored in the previous innings: {prevBatch.current}</h2>``
        </div>
    );
};

const divStyle = {
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(300deg, #ffffff 0%, #5899e2 74%)',
    color: 'black',
};

const inputStyle={
    color: 'Red',
}

export default Reference;
