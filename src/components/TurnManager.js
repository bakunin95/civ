import React, { useState } from 'react';

const TurnManager = () => {
    const [turn, setTurn] = useState(1); // Initialize the turn counter
    const [playerTurn, setPlayerTurn] = useState('X'); // Player whose turn it is

    const handleUnitMove = (x, y) => {
        // Update unit position and game state when a unit moves
        setTurn(turn + 1);
        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    };

    const handleCityBuild = (x, y) => {
        // Update city position and game state when a city is built
        setTurn(turn + 1);
        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    };

    return (
        <div>
            <p>Turn {turn}</p>
            <p>Player: {playerTurn}</p>
            <button onClick={() => handleUnitMove(x, y)}>Move Unit</button>
            <button onClick={() => handleCityBuild(x, y)}>Build City</button>
        </div>
    );
};

export default TurnManager;