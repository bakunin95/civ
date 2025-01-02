import React from 'react';

const AiPlayer = ({ map, units, resources }) => {
    const chooseAction = () => {
        // Choose a random action
        if (map.landType === 1) { // Grass
            return 'moveUnit';
        } else if (map.landType === 2) { // Water
            return 'buildCity';
        } else { // Forest
            return 'buildUnit';
        }
    };

    const moveUnit = () => {
        // Move a random unit from the map
        units.forEach((unit, index) => {
            if (Math.random() < 0.5) { // Randomly choose a unit to move
                console.log(`Moving unit ${index + 1}`);
            }
        });
    };

    const buildCity = () => {
        // Build a random city on the map
        let x = Math.floor(Math.random() * 10); // Random x-coordinate
        let y = Math.floor(Math.random() * 10); // Random y-coordinate
        console.log(`Building city at (${x}, ${y})`);
    };

    const buildUnit = () => {
        // Build a random unit on the map
        let x = Math.floor(Math.random() * 10); // Random x-coordinate
        let y = Math.floor(Math.random() * 10); // Random y-coordinate
        console.log(`Building unit at (${x}, ${y})`);
    };

    return (
        <div>
            <button onClick={chooseAction}>Choose Action</button>
            {chooseAction() === 'moveUnit' ? <button onClick={moveUnit}>Move Unit</button> : null}
            {chooseAction() === 'buildCity' ? <button onClick={buildCity}>Build City</button> : null}
            {chooseAction() === 'buildUnit' ? <button onClick={buildUnit}>Build Unit</button> : null}
        </div>
    );
};

export default AiPlayer;