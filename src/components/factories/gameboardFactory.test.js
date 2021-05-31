import gameboardFactory from './gameboardFactory';

describe('gameboard factory functions', () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = gameboardFactory();
  });
  it('gameboard factory provides ship length', () => {
    expect(testGameboard.shipTypes.carrier.length).toBe(5);
  });

  it('calls shipFactory correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'horizontal');
    expect(testGameboard.shipArray[0].length).toBe(4);
  });

  it('calls receiveAttack correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'horizontal');
    testGameboard.receiveAttack(1, 1);
    expect(
      (testGameboard.shipArray[0].shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 1 && shipSector.yCoordinate === 1
      )).hit
    ).toBe(true);
  });
});
