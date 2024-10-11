import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value); // Track user input as a string
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    // Handler for gaining attempts
    const handleGainAttempts = () => {
        // Convert the input value to a number
        const parsedAttempts = Number(requestedAttempts);

        // Check if the parsed value is a valid number and greater than 0
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    };
    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>

            {/* Numeric input box to specify number of requested attempts */}
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Enter attempts to gain"
            />

            {/* Use button to decrease attempts, disabled when attemptsLeft is 0 */}
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>

            {/* Gain button to increase attempts */}
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
export default GiveAttempts;
