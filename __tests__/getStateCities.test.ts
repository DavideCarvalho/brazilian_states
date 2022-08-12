import { getStateCities } from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';

describe('getStateCities', () => {
  it('should return the given state from fullname', () => {
    const cities = getStateCities({ state: 'São Paulo' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return the given state from fullname even if the name doesnt have accents', () => {
    const cities = getStateCities({ state: 'Sao Paulo' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return the given state from fullname even if the name is on lowercase and doesnt have accents', () => {
    const cities = getStateCities({ state: 'sao paulo' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by spaces', () => {
    const cities = getStateCities({ state: 'saopaulo' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by hyphen', () => {
    const cities = getStateCities({ state: 'sao-paulo' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by underline', () => {
    const cities = getStateCities({ state: 'sao_paulo' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return null if fullname state not found', () => {
    const cities = getStateCities({ state: 'someRandomState' });
    expect(cities).toEqual(undefined);
  });
  it('should return the given state from abbreviation', () => {
    const cities = getStateCities({ state: 'sp' });
    expect(cities.sort()).toEqual(spCities.cities.sort());
  });
  it('should return null if abbreviation state not found', () => {
    const cities = getStateCities({ state: 'someRandomState' });
    expect(cities).toEqual(undefined);
  });
  it('should throw an error if no parameter is passed to the function', () => {
    expect(() => getStateCities()).toThrow();
  });
  it('should throw an error if other parameter but state is passed to the function', () => {
    expect(() => getStateCities({ random: 'parameter' })).toThrow();
  });
});
