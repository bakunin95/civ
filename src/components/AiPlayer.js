import React, { useEffect } from 'react';

const AiPlayer = ({ map, units, resources, onActionComplete }) => {
    // Randomly select an action for the AI to perform
    const chooseAction = () => {
        const actions = ['moveUnit', 'buildCity', 'buildUnit'];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        return randomAction;
    };

    // AI unit movement logic
    const moveUnit = () => {
        // Randomly pick a unit to move
        const unitToMove = units[Math.floor(Math.random() * units.length)];

        // Randomly choose a new position for the unit (ensuring it's within bounds)
        const newPosition = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];

        console.log(`AI is moving unit ${unitToMove.id} to position [${newPosition[0]}, ${newPosition[1]}]`);

        // Call the onActionComplete callback to update the game state
        onActionComplete('moveUnit', unitToMove, newPosition);
    };

    // AI city-building logic
    const buildCity = () => {
        // Randomly choose a position on the map for the city
        const cityPosition = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];

        console.log(`AI is building a city at position [${cityPosition[0]}, ${cityPosition[1]}]`);

        // Call the onActionComplete callback to update the game state
        onActionComplete('buildCity', cityPosition);
    };

    // AI unit-building logic
    const buildUnit = () => {
        // Check if the AI has enough resources to build a unit
        if (resources >= 50) {
            console.log('AI is building a new unit');
            const newUnit = {
                id: units.length + 1,
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            };

            // Call the onActionComplete callback to update the game state
            onActionComplete('buildUnit', newUnit);
        } else {
            console.log('AI does not have enough resources to build a unit');
        }
    };

    // AI action logic that is triggered every turn
    useEffect(() => {
        const action = chooseAction();
        console.log(`AI chose action: ${action}`);

        if (action === 'moveUnit') {
            moveUnit();
        } else if (action === 'buildCity') {
            buildCity();
        } else if (action === 'buildUnit') {
            buildUnit();
        }
    }, [units, resources, map]);

    return <div>AI is thinking...</div>;
};

export default AiPlayer;
