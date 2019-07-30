import {getCityRegion} from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';
import {regionWithStateType} from '../src/types/regionWithStateType';

describe('getCityRegion', () => {
  it('should return null if region is not found', () => {
    const cityRegion = getCityRegion({city: 'a non existing city'});
    expect(cityRegion).toEqual(null);
  });
  it('should return only the name of the region', () => {
    const cityRegion = getCityRegion({city: 'Santos'});
    expect(cityRegion).toEqual('Sudeste');
  });
  it('should return json object from region sudeste with cityState sao paulo', () => {
    const cityRegion = getCityRegion({city: 'Santos', shouldReturnEntireJson: true}) as regionWithStateType;
    expect(cityRegion.regionName).toEqual('Sudeste');
    expect(cityRegion.cityState).toEqual(spCities);
  });
  it('should memoized region', () => {
    const cityRegion = getCityRegion({city: 'Santos'});
    const cityRegionMemoized = getCityRegion({city: 'Santos'});
    expect(cityRegionMemoized).toEqual('Sudeste');
  });
  it('should memoized region with shouldReturnEntireJson', () => {
    const cityRegion = getCityRegion({city: 'Santos', shouldReturnEntireJson: true});
    const cityRegionMemoized = getCityRegion({city: 'Santos', shouldReturnEntireJson: true});
    expect(cityRegionMemoized.regionName).toEqual('Sudeste');
    expect(cityRegionMemoized.cityState).toEqual(spCities);
  });
  it('should throw error if city property is not defined', () => {
    expect(() => getCityRegion({})).toThrow();
  });
  it('should throw error if city property is null', () => {
    expect(() => getCityRegion({city: null})).toThrow();
  });
  it('should throw error if city property is not a string', () => {
    expect(() => getCityRegion({city: false})).toThrow();
  });
  it('should throw error if shouldReturnEntireJson property is set and it is not a boolean', () => {
    expect(() => getCityRegion({city: 'Santos', shouldReturnEntireJson: 'string'})).toThrow();
  });
});
