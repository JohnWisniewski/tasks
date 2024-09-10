import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <img
                    src="C:\Users\jt11w\first_project\tasks\src\images\fist_project image.jpg"
                    alt="A cute dog i found online"
                />
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "red",
                }}
            ></div>
            <ul>
                <li>this ia first item in a list</li>
                <li>lists are fun</li>
                <li>because they are organized</li>
            </ul>
            <p>/Hello World/ {/* Add the "Hello World" text here */}</p>
        </div>
    );
}

export default App;
