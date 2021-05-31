import shipFactory from './shipFactory';

describe('ship factory functions', () => {
  let testCarrier;

  beforeEach(() => {
    testCarrier = shipFactory('carrier', [
      { xCoordinate: 1, yCoordinate: 1 },
      { xCoordinate: 2, yCoordinate: 1 },
      { xCoordinate: 3, yCoordinate: 1 },
      { xCoordinate: 4, yCoordinate: 1 },
      { xCoordinate: 5, yCoordinate: 1 },
    ]);
  });

  it('sets the ship type', () => {
    expect(testCarrier.type).toBe('carrier');
  });

  it('returns the ship length', () => {
    expect(testCarrier.length).toBe(5);
  });

  it('registers a hit', () => {
    testCarrier.registerHit(1, 1);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 1 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 2 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 3 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 4 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 5 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
  });

  it('registers multiple hits', () => {
    testCarrier.registerHit(1, 1);
    testCarrier.registerHit(2, 1);

    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 1 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 2 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 3 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 4 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoordinate === 5 && shipSector.yCoordinate === 1
      ).hit
    ).toBe(false);
  });

  it('sinks ship', () => {
    testCarrier.registerHit(1,1);
    testCarrier.registerHit(2,1);
    testCarrier.registerHit(3,1);
    testCarrier.registerHit(4,1);
    expect(testCarrier.isSunk()).toBe(false);
    testCarrier.registerHit(5,1);
    expect(testCarrier.isSunk()).toBe(true);
  });
});
