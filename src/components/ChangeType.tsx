import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function toggleQuestionType() {
        setQuestionType(
            questionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            {/* Conditionally display the question type */}
            <p>
                {questionType === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>

            {/* Step 4: Button to change the type */}
            <Button onClick={toggleQuestionType}>Change Type</Button>
        </div>
    );
}
