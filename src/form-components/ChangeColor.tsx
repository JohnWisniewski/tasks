import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
    const getTextColor = (bgColor: string): string => {
        if (bgColor === "yellow" || bgColor === "white") {
            return "black"; // Use black text for lighter background colors
        }
        return "white"; // Use white text for darker colors
    };
    return (
        <div>
            <h3>Change Color</h3>

            {/* Render radio buttons for each color */}
            <div>
                {colors.map((color) => (
                    <label
                        key={color}
                        style={{
                            display: "inline-block",
                            marginRight: "10px",
                            padding: "5px",
                            backgroundColor: color, // Set the background color to match the color
                            color: "white", // Ensure contrast for readability
                            borderRadius: "5px", // Add some border-radius for aesthetics
                            textAlign: "center",
                        }}
                    >
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => {
                                setSelectedColor(color);
                            }}
                            style={{ marginRight: "5px" }} // Adds space between radio button and label
                        />
                        {color}
                    </label>
                ))}
            </div>

            {/* Box of text that reflects the selected color */}
            <p
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color: getTextColor(selectedColor), // Ensure text contrast
                    border: "1px solid black",
                    width: "150px",
                    textAlign: "center",
                    margin: "0 auto",
                }}
            >
                You have chosen {selectedColor}
            </p>
        </div>
    );
}
