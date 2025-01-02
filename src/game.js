import React, { useState } from 'react';
import GameMap from './components/GameMap';
import TurnManager from './components/TurnManager';

const Game = () => {
  const [gameState, setGameState] = useState({

    mapData: generateInitialMap(),

    currentTurn: 'Player', // Player or AI
    selectedPosition: [0, 0],
    resources: 100,
  });


  function generateInitialMap() {
    const mapData = [];
    for (let i = 0; i < 10; i++) {
      mapData.push([]);
      for (let j = 0; j < 10; j++) {
        mapData[i].push(Math.floor(Math.random() * 3)); // Random land types
      }
    }
    return mapData;
  }


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
