import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(randomValue?: number): number {
    const random = randomValue !== undefined ? randomValue : Math.random();
    return 1 + Math.floor(random * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1); // Initialize with default value 1
    const [rightDie, setRightDie] = useState<number>(2); // Initialize with default value 1

    // Roll dice when the component is first interacted with, not on render
    const handleRollLeft = () => {
        setLeftDie(d6());
    };

    const handleRollRight = () => {
        setRightDie(d6());
    };

    // Determine the result message based on dice values
    const resultMessage =
        leftDie === rightDie ?
            leftDie === 1 ?
                "Lose"
            :   "Win"
        :   "Keep Rolling";

    return (
        <div>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>
            <div>
                <Button onClick={handleRollLeft}>Roll Left</Button>
                <Button onClick={handleRollRight}>Roll Right</Button>
            </div>
            <div>{resultMessage}</div>
        </div>
    );
}
