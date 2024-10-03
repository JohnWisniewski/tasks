import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    // Function to start the quiz
    const startQuiz = () => {
        if (attempts > 0) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    // Function to stop the quiz
    const stopQuiz = () => {
        setInProgress(false);
    };

    // Function to give a "Mulligan" (increase attempts)
    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            {/* Display the number of attempts */}
            <div>Attempts Left: {attempts}</div>

            {/* Start button */}
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>

            {/* Stop button */}
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            {/* Mulligan button */}
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
