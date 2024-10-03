import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Determine the result message based on dice values
    const resultMessage =
        leftDie === rightDie ?
            leftDie === 1 ?
                "Lose"
            :   "Win"
        :   "";

    return (
        <div>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {resultMessage && <div>{resultMessage}</div>}
        </div>
    );
}
