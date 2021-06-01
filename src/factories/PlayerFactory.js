import GameboardFactory from './GameboardFactory';

const PlayerFactory = (name) => {
  const playerGameboard = GameboardFactory();

  const attack = (xCoord, yCoord, opponentGameboard) => {
    if (
      opponentGameboard.gameboardArray.find(
        (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
      ).isAttacked === false
    ) {
      opponentGameboard.receiveAttack(xCoord, yCoord);
    }
  };

  return {
    name,
    playerGameboard,
    attack,
  };
};

export default PlayerFactory;
