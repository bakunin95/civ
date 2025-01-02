import React from 'react';
import GameMap from './components/GameMap';

const gameData = {
  mapData: [
    { cities: [{ position: [1, 1] }], units: [] },
    { cities: [], units: [] },
    // Add more map data as needed
  ],
  selectedPosition: [0, 0],
};

const Game = () => {
  const [gameState, setGameState] = React.useState(gameData);

  const onMoveUnit = (unit, newPosition) => {
    setGameState((prevGameState) => ({
      mapData: [
        // Update city positions
        ...prevGameState.mapData,
        prevGameState.mapData[newPosition[0]].cities.map((city) =>
          city.position === unit.position ? { position: newPosition } : city
        ),
        // Update unit position
        prevGameState.mapData[newPosition[0]].units.map((u) =>
          u.position === unit.position ? { position: newPosition } : u
        ),
      ],
      selectedPosition: newPosition,
    }));
  };

  return (
    <div>
      <GameMap mapData={gameState.mapData} onMoveUnit={onMoveUnit} />
    </div>
  );
};

export default Game;