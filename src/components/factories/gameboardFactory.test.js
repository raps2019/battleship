import gameboardFactory from './gameboardFactory';

describe('gameboard factory functions', () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = gameboardFactory();
  });
  it('gameboard factory provides ship length', () => {
    expect(testGameboard.shipTypes.carrier.length).toBe(5);
  });

  it('gameboard factory calls shipFactory correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'horizontal');
    expect(testGameboard.shipArray[0].length).toBe(4);
  });
});
