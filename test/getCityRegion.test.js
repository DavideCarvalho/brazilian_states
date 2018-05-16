import { expect } from 'chai';
import { getCityRegion } from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';

describe('getCityRegion', () => {
  it('should return only the name of the region', () => {
    const cityRegion = getCityRegion({ city: 'Santos' });
    expect(cityRegion).to.be.equal('Sudeste');
  });
  it('should return json object from region sudeste with cityState sao paulo', () => {
    const cityRegion = getCityRegion({ city: 'Santos', shouldReturnEntireJson: true });
    expect(cityRegion.regionName).to.be.equal('Sudeste');
    expect(cityRegion.cityState).to.be.equal(spCities);
  });
  it('should memoized region', () => {
    const cityRegion = getCityRegion({ city: 'Santos' });
    const cityRegionMemoized = getCityRegion({ city: 'Santos' });
    expect(cityRegionMemoized).to.be.equal('Sudeste');
  });
  it('should memoized region with shouldReturnEntireJson', () => {
    const cityRegion = getCityRegion({ city: 'Santos', shouldReturnEntireJson: true });
    const cityRegionMemoized = getCityRegion({ city: 'Santos', shouldReturnEntireJson: true });
    expect(cityRegionMemoized.regionName).to.be.equal('Sudeste');
    expect(cityRegionMemoized.cityState).to.be.equal(spCities);
  });
  it('should throw error if city property is not defined', () => {
    expect(() => getCityRegion({})).to.throw();
  });
});
