import { useState } from "react";

// Custom hook to manage dhValue and setDhValue
export function useDoubleHalfState() {
    const [dhValue, setDhValue] = useState<number>(10);
    return { dhValue, setDhValue }; // Return the state and the setter function
}
