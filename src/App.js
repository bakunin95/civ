import React, { useState } from 'react';
import AiPlayer from './components/AiPlayer';
import GameMap from './components/GameMap';
import TurnManager from './components/TurnManager';

const App = () => {
    const [map, setMap] = useState(generateInitialMap());
    const [units, setUnits] = useState([
        { id: 1, x: 1, y: 1 },
        { id: 2, x: 2, y: 2 },
    ]);
    const [resources, setResources] = useState(100);
    const [currentTurn, setCurrentTurn] = useState('Player'); // Turn management

    function generateInitialMap() {
        const mapData = [];
        for (let i = 0; i < 10; i++) {
            mapData.push([]);
            for (let j = 0; j < 10; j++) {
                mapData[i].push(Math.floor(Math.random() * 3)); // Random land types (grass, water, forest)
            }
        }
        return mapData;
    }

    // Callback to handle AI actions and update the game state
    const onActionComplete = (action, data) => {
        if (action === 'moveUnit') {
            const [unit, newPosition] = data;
            const updatedUnits = units.map((u) =>
                u.id === unit.id ? { ...u, x: newPosition[0], y: newPosition[1] } : u
            );
            setUnits(updatedUnits);
        } else if (action === 'buildCity') {
            const [cityPosition] = data;
            console.log(`Building city at position [${cityPosition[0]}, ${cityPosition[1]}]`);
        } else if (action === 'buildUnit') {
            const newUnit = data;
            setUnits([...units, newUnit]);
        }

        // After the action is complete, change the turn
        setCurrentTurn(currentTurn === 'Player' ? 'AI' : 'Player');
    };

    return (
        <div>
            <TurnManager currentTurn={currentTurn} />
            <GameMap
                mapData={map}
                units={units}
                onMoveUnit={(unit, newPosition) => {
                    const updatedUnits = units.map((u) =>
                        u.id === unit.id ? { ...u, x: newPosition[0], y: newPosition[1] } : u
                    );
                    setUnits(updatedUnits);
                    setCurrentTurn(currentTurn === 'Player' ? 'AI' : 'Player');
                }}
            />
            <AiPlayer map={map} units={units} resources={resources} onActionComplete={onActionComplete} />
        </div>
    );
};

export default App;
