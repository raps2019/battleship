import gameboardFactory from './gameboardFactory';

describe('gameboard factory functions', () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = gameboardFactory();
  });
  it('gameboard factory provides ship length', () => {
    expect(testGameboard.shipTypes.carrier.length).toBe(5);
  });

  
});
