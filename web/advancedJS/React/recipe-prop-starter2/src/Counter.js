import React, { useState } from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0);
    const buttonClicked = () => {
        setCounter(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={buttonClicked}>Click Me!</button>
        </div>
    )
}

export default Counter;