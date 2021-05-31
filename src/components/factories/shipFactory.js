const shipFactory = (type, gridPositionsOccupied) => {
  let shipSectors = [];

  gridPositionsOccupied.forEach((gridPosition) => {
    shipSectors.push({
      xCoordinate: gridPosition.xCoordinate,
      yCoordinate: gridPosition.yCoordinate,
      hit: false,
    });
  });

  const registerHit = (xCoordinate, yCoordinate) => {
    shipSectors.forEach((shipSector) => {
      if (
        shipSector.xCoordinate === xCoordinate &&
        shipSector.yCoordinate === yCoordinate
      ) {
        shipSector.hit = true;
      }
    });
  };

  const isSunk = () => {
    if (shipSectors.some((shipSector) => shipSector.hit === false)) {
      return false;
    } else {
      return true;
    }
  };

  return {
    type,
    shipSectors,
    length: shipSectors.length,
    registerHit,
    isSunk,
  };
};

export default shipFactory;

