import React, { useRef, useEffect } from 'react';
import fitty from 'fitty';

const FittedText = ({ text }) => {
    const containerRef = useRef();

    useEffect(() => {
        // Initialize Fitty on the container element once it's rendered
        const fittyInstance = fitty(containerRef.current, {
            // Fitty options (optional)
            maxSize: 100, // Maximum font size in pixels
            minSize: 12,  // Minimum font size in pixels
            multiLine: true, // Enable/disable multiline text fitting
            observeMutations: true, // Watch for mutations to update the fitting if needed
        });

        // Cleanup function to remove Fitty on component unmount
        return () => fittyInstance.unsubscribe();
    }, [text]);

    return (
        <div ref={containerRef}>
            {text}
        </div>
    );
};

export default FittedText;
