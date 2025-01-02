import React from 'react';

const AiPlayer = ({ map, units, resources }) => {
    const chooseAction = () => {
        if (map.landType === 1) {
            return 'moveUnit';
        } else if (map.landType === 2) {
            return 'buildCity';
        } else {
            return 'buildUnit';
        }
    };

    const moveUnit = () => {
        // Implement AI unit movement
        console.log('AI is moving a unit');
    };

    const buildCity = () => {
        // Implement AI city building
        console.log('AI is building a city');
    };

    const buildUnit = () => {
        // Implement AI unit building
        console.log('AI is building a unit');
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
