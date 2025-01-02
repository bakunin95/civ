const movementRules = {
  // Movement range for each unit type
  unitMovementRanges: {
    infantry: { gridSize: 5, coastalRange: 2 },
    archer: { gridSize: 4, coastalRange: 1 },
    knight: { gridSize: 3, coastalRange: 1 }
  },

  // Terrain costs for movement
  terrainCosts: {
    grass: 1,
    water: 2,
    forest: 3
  },

  // Special rules (e.g., rivers, mountains)
  specialRules: {
    river: { costFactor: -0.5 },
    mountain: { costFactor: -2 }
  }
};