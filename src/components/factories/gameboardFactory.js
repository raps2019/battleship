import shipFactory from './shipFactory';

const gameboardFactory = () => {
  const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shipTypes = {
    carrier: { length: 5 },
    battleship: { length: 4 },
    destroyer: { length: 3 },
    submarine: { length: 3 },
    patrolBoat: { length: 2 },
  };

  const shipArray = [];
  const gameboardArray = [];

  xAxis.forEach((xCoordinate) =>
    yAxis.forEach((yCoordinate) =>
      gameboardArray.push({
        xCoordinate,
        yCoordinate,
        gridPosition: `${xCoordinate},${yCoordinate}`,
        shipPresent: null,
        attacked: false,
      })
    )
  );

  const placeShip = (shipType, xCoordinate, yCoordinate, orientation) => {
    const shipLength = shipTypes[shipType].length;
    const gridPositionsOccupied = [];

    if (orientation === 'horizontal') {
      for (let i = xCoordinate; i < xCoordinate + shipLength; i += 1) {
        gridPositionsOccupied.push(i + yCoordinate);
        gameboardArray.find(
          (grid) => grid.xCoordinate === i && grid.yCoordinate === yCoordinate
        ).shipPresent = shipType;
      }
    } else if (orientation === 'vertical') {
      for (let i = yCoordinate; i < yCoordinate + shipLength; i += 1) {
        gridPositionsOccupied.push(i + xCoordinate);
        gameboardArray.find(
          (grid) => grid.yCoordinate === i && grid.xCoordinate === xCoordinate
        ).shipPresent = shipType;
      }
    }

    const ship = shipFactory(shipType, gridPositionsOccupied);
    shipArray.push({shipType : ship});
  };

  return {
    gameboardArray,
    shipTypes,
    shipArray,
    placeShip,
  };
};

export default gameboardFactory;

// const cpuGameboard = gameboardFactory();
// cpuGameboard.placeShip('battleship', 1, 1, 'vertical');

// console.log(cpuGameboard);
