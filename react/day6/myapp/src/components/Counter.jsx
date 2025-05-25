
import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect runs with count:", count);

        return () => {
            console.log("Cleanup before next run. Previous count:", count);
        };
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
export default Counter;