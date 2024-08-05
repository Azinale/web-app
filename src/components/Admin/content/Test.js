import React, { useState, useMemo, useRef } from 'react';

function computeExpensiveValue(numbers) {
    console.log("Computing expensive value...");
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(">>>>>>>>>re-caculate")
        total += numbers[i];
    }
    return total;
}

function Fathercomp() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [newNumber, setNewNumber] = useState('');
    const [trigger, setTrigger] = useState(false);


    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`Component has rendered ${renderCount.current} times`);


    const expensiveValue = useMemo(() => {
        return computeExpensiveValue(numbers);
    }, [numbers]);

    const handleAddNumber = () => {
        const parsedNumber = parseFloat(newNumber);
        if (!isNaN(parsedNumber)) {
            setNumbers([...numbers, parsedNumber]);
            setNewNumber('');
        }
    };

    return (
        <div>
            <p>value: {expensiveValue}</p>
            <input
                type="number"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                placeholder="Enter a number"
            />
            <button onClick={handleAddNumber}>
                Add Number
            </button>
            <button onClick={() => setTrigger(!trigger)}>
                Re-render Component
            </button>
        </div>
    );
}

export default Fathercomp;
