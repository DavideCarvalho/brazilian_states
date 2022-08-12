import { getCityState } from '../src/api/estados';

describe('getCityState', () => {
  it('should return only the name of the state if shouldReturnEntireJson is not set', () => {
    expect(getCityState({ city: 'Santos' })).toEqual('São Paulo');
  });
  it('should return undefined if nothing is found and shouldReturnEntireJson is not set', () => {
    expect(getCityState({ city: 'asldjoijsda' })).toEqual(undefined);
  });
  it('should throw an error if no object is set', () => {
    expect(() => getCityState()).toThrow();
  });
  it('should throw an error if an object with no city property is set', () => {
    expect(() => getCityState({ random: 'property' })).toThrow();
  });
});
