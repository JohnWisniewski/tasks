import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false); // Controls whether in edit mode or not
    const [name, setName] = useState("Your Name"); // The name of the user
    const [isStudent, setIsStudent] = useState(true); // Whether the user is a student

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div>
            <h3>Edit Mode</h3>

            {/* Switch to toggle edit mode */}

            {/* Switch to toggle edit mode */}
            <label className="form-switch">
                {" "}
                {/* Move className to the label */}
                Edit Mode:
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={toggleEditMode}
                    className="form-switch" // Adding class for test
                    role="checkbox"
                />
            </label>

            {/* If in edit mode, render the form for editing the name and student status */}
            {
                editMode ?
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                role="textbox" // Ensure this is recognized as a textbox
                            />
                        </label>
                        <br />
                        <label>
                            Student:
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => {
                                    setIsStudent(e.target.checked);
                                }}
                                role="checkbox" // Properly label the checkbox for the student status
                                aria-label="student"
                            />
                        </label>
                    </div>
                    // If not in edit mode, display the formatted text
                :   <p>
                        {name} is {isStudent ? "a student" : "not a student"}.
                    </p>

            }
        </div>
    );
}
