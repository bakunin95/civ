import React, { useState } from 'react';
import GameMap from './components/GameMap';
import TurnManager from './components/TurnManager';

const Game = () => {
  const [gameState, setGameState] = useState({
    mapData: [
      { cities: [{ position: [1, 1] }], units: [] },
      { cities: [], units: [] },
      // More map data
    ],
    currentTurn: 'Player', // Player or AI
    selectedPosition: [0, 0],
    resources: 100,
  });

  const onMoveUnit = (unit, newPosition) => {
    const updatedMapData = [...gameState.mapData];
    updatedMapData[unit.position[0]].units = updatedMapData[unit.position[0]].units.filter(
      (u) => u.id !== unit.id
    );
    updatedMapData[newPosition[0]].units.push({ ...unit, position: newPosition });

    setGameState({
      ...gameState,
      mapData: updatedMapData,
      currentTurn: gameState.currentTurn === 'Player' ? 'AI' : 'Player',
    });
  };

  return (
    <div>
      <TurnManager turn={gameState.currentTurn} />
      <GameMap mapData={gameState.mapData} onMoveUnit={onMoveUnit} />
    </div>
  );
};

export default Game;
