import React, { useState } from 'react';

const IndexPage = () => {
    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [inputC, setInputC] = useState('');

    const handleStartClick = () => {
        setInputB(inputA);
        setInputC(`${inputC}A:${inputA}\nB:${inputB}\n`);
    };

    return (
        <div>
            <input type="text" value={inputA} onChange={(event) => setInputA(event.target.value)} />
            <input type="text" value={inputB} readOnly />
            <input type="text" value={inputC} readOnly />
            <button onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default IndexPage;
