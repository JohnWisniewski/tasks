import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAnswer = () => {
        setIsVisible((prevVisible) => !prevVisible);
    };

    return (
        <div>
            <Button onClick={toggleAnswer}>
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
