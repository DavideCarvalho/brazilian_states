import { getAllRegions } from '../src/api/estados';

describe('getAllRegions', () => {
  it('North region should have the right states', () => {
    const regionsArray = [
      'Norte',
      'Nordeste',
      'Centro-Oeste',
      'Sudeste',
      'Sul',
    ];
    const regions = getAllRegions();
    expect(regions.length).toBe(5);
    expect(regions.sort()).toStrictEqual(regionsArray.sort());
  });
});
