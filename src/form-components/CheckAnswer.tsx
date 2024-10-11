import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    // Handler to update state when the user types an answer
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };
    const isCorrect =
        userAnswer.trim().toLowerCase() === expectedAnswer.toLowerCase();

    return (
        <div>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Enter your answer"
            />

            <h3>{isCorrect ? "✔️" : "❌"}</h3>
        </div>
    );
}
