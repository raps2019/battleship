import GameboardFactory from './GameboardFactory';
import PlayerFactory from './PlayerFactory';

describe('player factory functions', () => {
  let testPlayer;

  beforeEach(() => {
    testPlayer = PlayerFactory('test');
  });

  it('should return name', () => {
    expect(testPlayer.name).toBe('test');
  });

  it('should attack opponents gameboard', () => {
    const opponentGameboard = GameboardFactory();

    testPlayer.attack(1, 1, opponentGameboard);
    testPlayer.attack(2, 1, opponentGameboard);

    expect(
      opponentGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 1 && grid.yCoord === 1
      ).isAttacked
    ).toBe(true);
    expect(
      opponentGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 2 && grid.yCoord === 1
      ).isAttacked
    ).toBe(true);
  });
});
