import React from 'react';
import Unit from './Unit';
import City from './City';

const GameMap = ({ mapData, onMoveUnit }) => {
  const handleUnitClick = (unit) => {
    // Select the unit to move
    console.log('Unit clicked', unit);
  };

  return (
    <div>
      {mapData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((tile, tileIndex) => (
            <div
              key={tileIndex}
              style={{
                backgroundColor: tile === 'grass' ? 'green' : tile === 'water' ? 'blue' : 'brown',
                padding: '20px',
                border: '1px solid black',
              }}
            >
              {tile}
            </div>
          ))}
        </div>
      ))}
      {/* Render cities and units */}
      {mapData.flatMap((row) =>
        row.units.map((unit, index) => (
          <Unit key={index} unit={unit} onClick={handleUnitClick} />
        ))
      )}
      {mapData.flatMap((row) =>
        row.cities.map((city, index) => <City key={index} city={city} />)
      )}
    </div>
  );
};

export default GameMap;
