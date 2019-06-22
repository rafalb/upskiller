import React, { useState } from 'react';

const Calculator = () => {
    const [sum, setSum] = useState("");
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    return (
    <div>
        <input value={number1} onInput={v => setNumber1(v.target.value)} />
        <input value={number2} onInput={v => setNumber2(v.target.value)} />
        <button onClick={() => setSum(Number(number1) + Number(number2))}>Sum</button>
        <p>Result: {sum}</p>
    </div>
    );
}

export default Calculator;