import { useEffect } from "react";

function Timer() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Tick");
        }, 1000);

        // Cleanup function: clear interval when component unmounts
        return () => {
            clearInterval(intervalId);
            console.log("Interval cleared");
        };
    }, []); // Run only once

    return <div>Timer is running. Check console.</div>;
}
export default Timer;