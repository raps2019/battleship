import Ship from './ShipFactory';

describe('ship factory functions', () => {
  let testCarrier;

  beforeEach(() => {
    testCarrier = Ship('carrier', [
      { xCoord: 1, yCoord: 1 },
      { xCoord: 2, yCoord: 1 },
      { xCoord: 3, yCoord: 1 },
      { xCoord: 4, yCoord: 1 },
      { xCoord: 5, yCoord: 1 },
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
          shipSector.xCoord === 1 && shipSector.yCoord === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 2 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 3 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 4 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 5 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
  });

  it('registers multiple hits', () => {
    testCarrier.registerHit(1, 1);
    testCarrier.registerHit(2, 1);

    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 1 && shipSector.yCoord === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 2 && shipSector.yCoord === 1
      ).hit
    ).toBe(true);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 3 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 4 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testCarrier.shipSectors.find(
        (shipSector) =>
          shipSector.xCoord === 5 && shipSector.yCoord === 1
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
