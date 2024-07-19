import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number | string>(0);
    const [speed, setSpeed] = useState<number | string>(0);
    const [time, setTime] = useState<string>("0 hours 0 minutes");

    // Allow empty string to not error out if numbers are deleted otherwise must be number
    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setDistance(value === "" ? "" : Number(value));
    };

    // Allow empty string to not error out if numbers are deleted otherwise must be number
    const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setSpeed(value === "" ? "" : Number(value));
    };
    // If distance and speed are of type number and the speed is greater than 0, then continue
    // Use Math.floor to round down to the nearest whole integer
    // Use Math.round to give a more accurate time
    const calculateTime = (): void => {
        if (typeof distance === "number" && typeof speed === "number" && speed > 0) {
            const timeInHours = distance / speed;
            const hours = Math.floor(timeInHours);
            const minutes = Math.round((timeInHours - hours) * 60);
            setTime(`${hours} hours ${minutes} minutes`);
        } else {
            setTime("0 hours 0 minutes");
        }
    };

    return (
        <>
            <form>
                <div>
                    <label htmlFor="distance">Distance (Miles)</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance}
                        placeholder="Enter distance in miles"
                        onChange={handleDistanceChange}
                    />
                </div>
                <div>
                    <label htmlFor="speed">Speed (MPH)</label>
                    <input
                        type="number"
                        id="speed"
                        value={speed}
                        placeholder="Enter speed in MPH"
                        onChange={handleSpeedChange}
                    />
                </div>
                <button type="button" onClick={calculateTime}>Calculate Time</button>
            </form>
            <div>
                <h2>Time to Destination: {time}</h2>
            </div>
        </>
    );
};

export default Calculator;
