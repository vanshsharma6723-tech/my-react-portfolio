import { useState } from "react";

function ButtonApp() {
    const [count, setCount] = useState(0);
    let message;

    if (count === 0) {
        message = "Counter is zero";
    } else if (count >= 5) {
        message = "Great! You reached 5 or more!";
    } else {
        message = "Keep going!";
    }
    return (
        <div>
            <h2>count: {count}</h2>
            <h3>{message}</h3>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                }
            }
            }>
                Decrease
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export default ButtonApp;