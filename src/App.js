import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrease</button>
        </div>
    );
}

export default Counter;
