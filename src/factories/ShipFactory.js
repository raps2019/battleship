const Ship = (type, gridPositionsOccupied) => {
  let shipSectors = [];

  gridPositionsOccupied.forEach((gridPosition) => {
    shipSectors.push({
      xCoord: gridPosition.xCoord,
      yCoord: gridPosition.yCoord,
      hit: false,
    });
  });

  const registerHit = (xCoord, yCoord) => {
    shipSectors.forEach((shipSector) => {
      if (
        shipSector.xCoord === xCoord &&
        shipSector.yCoord === yCoord
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

export default Ship;

