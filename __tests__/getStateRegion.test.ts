import { getStateRegion } from '../src/api/estados';

describe('getStateRegion', () => {
  it('should return right region for São Paulo', () => {
    const regionFromSaoPaulo = getStateRegion({ state: 'São Paulo' });
    expect(regionFromSaoPaulo.regionName).toEqual('Sudeste');
  });
  it('should return right region for sao paulo', () => {
    const regionFromSaoPaulo = getStateRegion({ state: 'sao paulo' });
    expect(regionFromSaoPaulo.regionName).toEqual('Sudeste');
  });
  it('should return from the memoized json', () => {
    const regionFromSaoPaulo = getStateRegion({ state: 'sao paulo' });
    const regionFromSaoPauloMemoized = getStateRegion({ state: 'sao paulo' });
    expect(regionFromSaoPauloMemoized.regionName).toEqual('Sudeste');
  });
  it(`should throw an error if state is not a string`, () => {
    expect(() => getStateRegion({ state: 123 })).toThrow();
  })
  it('should return empty object if not a valid state is passed', () => {
    const regionFromSaoPaulo = getStateRegion({ state: 'some state' });
    expect(regionFromSaoPaulo).toEqual({});
  });
  it('should throw if state property is not given', () => {
    expect(() => getStateRegion({ random: 'property' })).toThrow();
  });
  it('should throw if is passed an empty json', () => {
    expect(() => getStateRegion({})).toThrow();
  });
  it('should throw if nothing is passed to the function', () => {
    expect(() => getStateRegion()).toThrow();
  });
});
