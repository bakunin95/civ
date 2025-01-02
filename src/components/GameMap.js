import React, { useState } from 'react';
import Unit from './Unit';
import City from './City';

const GameMap = ({ mapData, onMoveUnit }) => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleUnitClick = (unit) => {
    if (selectedUnit === unit) return;

    setSelectedUnit(unit);
  };

  const handleMoveUnit = () => {
    if (!selectedUnit) return;
    onMoveUnit(selectedUnit, mapData.selectedPosition);
    setSelectedUnit(null);
  };

  return (
    <div>
      {mapData.cities.map((city, i) => (
        <City key={i} city={city} onClick={() => handleUnitClick(city)} position={city.position} />
      ))}
      {mapData.units.map((unit, i) => (
        <Unit
          key={i}
          unit={unit}
          onClick={(unit) => handleUnitClick(unit)}
          position={unit.position}
        />
      ))}
    </div>
  );
};

export default GameMap;