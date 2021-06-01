import GameboardFactory from './GameboardFactory';

describe('gameboard factory functions', () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = GameboardFactory();
  });
  it('gameboard factory provides ship length', () => {
    expect(testGameboard.shipTypes.carrier.length).toBe(5);
  });

  it('calls placeShip and shipFactory correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'horizontal');
    expect(testGameboard.shipArray[0].length).toBe(4);
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 1 && grid.yCoord === 1
      ).shipPresent
    ).toBe('battleship');
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 4 && grid.yCoord === 1
      ).shipPresent
    ).toBe('battleship');
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 5 && grid.yCoord === 1
      ).shipPresent
    ).toBe(null);
  });

  it('calls receiveAttack correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'horizontal');
    testGameboard.receiveAttack(1, 1);
    expect(
      testGameboard.shipArray[0].shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 1 && shipSector.yCoord === 1
      ).hit
    ).toBe(true);
    expect(
      testGameboard.shipArray[0].shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 2 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 1 && grid.yCoord === 1
      ).isAttacked
    ).toBe(true);
  });

  it('calls shipsStillActive correctly', () => {
    testGameboard.placeShip('carrier', 1, 1, 'vertical');
    testGameboard.placeShip('patrolBoat', 4, 4, 'horizontal')
    testGameboard.receiveAttack(1, 1);
    expect(testGameboard.shipsStillActive()).toBe(true);
    testGameboard.receiveAttack(1,2);
    testGameboard.receiveAttack(1,3);
    testGameboard.receiveAttack(1,4);
    testGameboard.receiveAttack(1,5);
    expect(testGameboard.shipsStillActive()).toBe(true);
    testGameboard.receiveAttack(4,4);
    testGameboard.receiveAttack(5,4);
    expect(testGameboard.shipsStillActive()).toBe(false);
  })
});
