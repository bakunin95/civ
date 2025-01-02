const movementRules = {
  unitMovementRanges: {
    infantry: { gridSize: 5, coastalRange: 2 },
    archer: { gridSize: 4, coastalRange: 1 },
    knight: { gridSize: 3, coastalRange: 1 },
  },
  terrainCosts: {
    grass: 1,
    water: 2,
    forest: 3,
  },
  specialRules: {
    river: { costFactor: -0.5 },
    mountain: { costFactor: -2 },
  },
};

export default movementRules;
