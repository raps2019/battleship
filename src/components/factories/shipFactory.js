const shipFactory = (type, gridPositionsOccupied) => {
  let shipStatus = [];

  gridPositionsOccupied.forEach((gridPosition) => {
    shipStatus.push({ gridPosition, hit: false });
  });

  const registerHit = (gridPositionHit) => {
    shipStatus.forEach((gridPosition) => {
      if (gridPosition.gridPosition === gridPositionHit) {
        gridPosition.hit = true;
      }
    });
  };

  const isSunk = () => {
    if (shipStatus.some((gridPosition) => gridPosition.hit === false)) {
      return false;
    } else {
      return true;
    }
  };

  return {
    type,
    shipStatus,
    length: shipStatus.length,
    registerHit,
    isSunk,
  };
};

export default shipFactory;
