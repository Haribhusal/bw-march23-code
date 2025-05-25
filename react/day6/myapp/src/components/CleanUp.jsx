import { useEffect } from "react";

function Cleanup() {
    useEffect(() => {
        const handleResize = () => {
            console.log("Window resized");
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function: runs on unmount or before next effect
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Cleanup: removed resize listener");
        };
    }, []); // Empty dependency array → runs once on mount

    return <div>Resize the window and check the console.</div>;
}

export default Cleanup;