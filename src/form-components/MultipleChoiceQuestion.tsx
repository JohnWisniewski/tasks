import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);
    const isCorrect = selectedAnswer === expectedAnswer;
    return (
        <div>
            <h3>Multiple Choice Question</h3>

            {/* Dropdown to select an answer */}
            <select
                value={selectedAnswer}
                onChange={(e) => {
                    setSelectedAnswer(e.target.value);
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* Display if the answer is correct or incorrect */}
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
