import React, {useState} from "react";

const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number>();
    const [speed, setSpeed] = useState<number>();

const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDistance(event.target.valueAsNumber);
};
const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSpeed(event.target.valueAsNumber);

};


    return (
        <>
            <form>
                <div>
                    <label htmlFor="distance">Distance(Miles)</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance}
                        placeholder="Enter distance in miles"
                        onChange={handleDistanceChange} />
                </div>
                <div>
                    <label htmlFor="speed">Speed(MPH)</label>
                    <input
                        type="number"
                        id="speed"
                        value={speed}
                        placeholder="Enter speed in MPH"
                        onChange={handleSpeedChange} />
                </div>
            </form>
        </>
    );
}

export default Calculator