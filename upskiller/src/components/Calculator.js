import React, { useState } from 'react';

const Calculator = () => {
    const [sum, setSum] = useState("");
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const recalculate = (n1, n2) => setSum(Number(n1) + Number(n2));

    return (
    <div>
        <input value={number1} onInput={v => { setNumber1(v.target.value); recalculate(v.target.value, number2); }} />
        <input value={number2} onInput={v => { setNumber2(v.target.value); recalculate(number1, v.target.value); } } />
        <button onClick={() => recalculate(number1, number2)}>Sum</button>
        <p>Result: {sum}</p>
    </div>
    );
}

export default Calculator;