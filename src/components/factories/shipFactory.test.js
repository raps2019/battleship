import shipFactory from './shipFactory';

describe('ship factory functions', () => {
  let testCarrier;

  beforeEach(() => {
    testCarrier = shipFactory('carrier', [1, 2, 3, 4, 5]);
  });

  it('sets the ship type', () => {
    expect(testCarrier.type).toBe('carrier');
  });

  it('returns the ship length', () => {
    expect(testCarrier.length).toBe(5);
  });

  it('registers a hit', () => {
    testCarrier.registerHit(1);
    expect(
      testCarrier.shipStatus.find(
        (gridPosition) => gridPosition.gridPosition === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipStatus.find(
        (gridPosition) => gridPosition.gridPosition !== 1
      ).hit
    ).toBe(false);
  });

  it('registers multiple hits', () => {
    testCarrier.registerHit(1);
    testCarrier.registerHit(3);
    expect(
      testCarrier.shipStatus.find(
        (gridPosition) => gridPosition.gridPosition === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipStatus.find(
        (gridPosition) => gridPosition.gridPosition === 3
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipStatus.find(
        (gridPosition) =>
          gridPosition.gridPosition !== 1 && gridPosition.gridPosition !== 3
      ).hit
    ).toBe(false);
  });

  it('sinks ship', () => {
    testCarrier.registerHit(1);
    testCarrier.registerHit(2);
    testCarrier.registerHit(3);
    testCarrier.registerHit(4);
    expect(testCarrier.isSunk()).toBe(false);
    testCarrier.registerHit(5);
    expect(testCarrier.isSunk()).toBe(true);
  });
});
