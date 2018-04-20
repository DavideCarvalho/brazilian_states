const api = require('../api/estados');
const spCities = require('../api/estados/saopaulo');
const _ = require('lodash');
const { expect } = require('chai');

describe('state', () => {
  it('should return the given state from fullname', () => {
    const cities = api.getCities({ state: 'saopaulo' });
    expect(cities).to.equal(spCities);
  });
  it('should return undefined if fullname state not found', () => {
    const cities = api.getCities({ state: 'someRandomState' });
    expect(cities).to.equal(undefined);
  });
  it('should return the given state from abbreviation', () => {
    const cities = api.getCities({ state: 'sp' });
    expect(cities).to.equal(spCities);
  });
  it('should return undefined if abbreviation state not found', () => {
    const cities = api.getCities({ state: 'someRandomState' });
    expect(cities).to.equal(undefined);
  });
  it('should throw an error if no parameter is passed to the function', () => {
    expect(() => api.getCities()).to.throw();
  });
  it('should throw an error if other parameter but state is passed to the function', () => {
    expect(() => api.getCities({ random: 'parameter' })).to.throw();
  });
  it('should return json object of the state that has the given city if returnEntireJson is set to true', () => {
    expect(
      api.getCityFromState({ city: 'Santos', returnEntireJson: true }),
    ).to.be.equal(spCities);
  });
  it('should return only the name of the state if returnEntireJson is not set', () => {
    expect(api.getCityFromState({ city: 'Santos' })).to.be.equal('São Paulo');
  });
  it('should return only the name of the state if returnEntireJson is set to false', () => {
    expect(api.getCityFromState({ city: 'Santos', returnEntireJson: false })).to.be.equal('São Paulo');
  });
  it('should return empty array if nothing is found and returnEntireJson is true', () => {
    expect(
      api.getCityFromState({ city: 'asldjoijsda', returnEntireJson: true }),
    ).to.be.deep.equal({});
  });
  it('should return empty string if nothing is found and returnEntireJson is false', () => {
    expect(
      api.getCityFromState({ city: 'asldjoijsda', returnEntireJson: false }),
    ).to.be.deep.equal('');
  });
  it('should return empty string if nothing is found and returnEntireJson is not set', () => {
    expect(api.getCityFromState({ city: 'asldjoijsda' })).to.be.deep.equal('');
  });
});
