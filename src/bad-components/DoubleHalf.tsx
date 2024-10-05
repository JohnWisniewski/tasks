import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ onClick }: { onClick: () => void }): React.JSX.Element {
    return <Button onClick={onClick}>Double</Button>;
}

function Halver({ onClick }: { onClick: () => void }): React.JSX.Element {
    return <Button onClick={onClick}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    // Initialize dhValue to 10 as required by the test
    const [dhValue, setDhValue] = useState(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* Pass the state update functions as props */}
            <Doubler
                onClick={() => {
                    setDhValue(dhValue * 2);
                }}
            />
            <Halver
                onClick={() => {
                    setDhValue(dhValue / 2);
                }}
            />
        </div>
    );
}
