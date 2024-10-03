import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidaysAlphabetically = [
    "🎄 Christmas",
    "🐇 Easter",
    "🎃 Halloween",
    "🎆 New Year",
    "🍁 Thanksgiving",
];
const holidaysByYear = [
    "🎆 New Year",
    "🐇 Easter",
    "🎃 Halloween",
    "🍁 Thanksgiving",
    "🎄 Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState("🎆 New Year");

    // Function to get the next holiday alphabetically
    const advanceByAlphabet = () => {
        const currentIndex = holidaysAlphabetically.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysAlphabetically.length;
        setCurrentHoliday(holidaysAlphabetically[nextIndex]);
    };

    // Function to get the next holiday by year
    const advanceByYear = () => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    };

    return (
        <div>
            <h2>Holiday: {currentHoliday}</h2>
            <div>
                <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
