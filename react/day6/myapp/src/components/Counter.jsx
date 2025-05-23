import { useState, useEffect } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]);

    //getters and setters
    return (
        <div className="p-5 text-center bg-gray-100">
            <h1 className="text-3xl mb-5">Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} className="bg-green-500 px-5 mr-3 py-2 rounded-md text-white">Increment</button>
            <button onClick={() => setCount(count - 1)} className="bg-green-500 px-5 py-2 rounded-md text-white">Decrement</button>
        </div>
    )
}