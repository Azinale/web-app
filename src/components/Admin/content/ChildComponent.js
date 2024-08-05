import React, { useState, useCallback, memo } from 'react';

const ChildComponent1 = memo(({ handleClick }) => {
    console.log('su dung call back render');
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
});

const ChildComponent2 = memo(({ handleClick2 }) => {
    console.log('khong su dung callback render');
    return (
        <button onClick={handleClick2}>
            Click me2
        </button>
    );
});


const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('su dung call back render');
        // setCount(count => count + 1);
    }, [count]);

    const handleClick2 = () => {
        console.log('KHONG su dung call back render');
        // setCount(count => count + 1);
    };
    console.log("cha render")
    return (
        <div>
            <ChildComponent1 handleClick={handleClick} />
            <ChildComponent2 handleClick2={handleClick2} />
            <button onClick={() => setCount(count + 1)}>
                increase
            </button>
        </div>
    );
};

export default ParentComponent;
