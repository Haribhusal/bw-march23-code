import React, { useEffect } from 'react'

const Ticker = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Tick');
        }, 1000);

        return () => clearInterval(interval); // Cleanup
    }, []);
    return (
        <div>Ticker</div>
    )
}

export default Ticker