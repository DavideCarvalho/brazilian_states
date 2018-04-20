const api = require ('../api/estados');
const spCities = require ('../api/estados/saopaulo');
const { expect } = require('chai');

describe('state', () => {
  it('should return the given state from fullname', () => {
    const cities = api.getCities({state: 'saopaulo'});
    expect(cities).to.equal(spCities);
  }),
  it('should return undefined if fullname state not found', () => {
    const cities = api.getCities({state: 'someRandomState'});
    expect(cities).to.equal(undefined);
  }),
  it('should return the given state from abbreviation', () => {
    const cities = api.getCities({state: 'sp'});
    expect(cities).to.equal(spCities);
  })
  it('should return undefined if abbreviation state not found', () => {
    const cities = api.getCities({state: 'someRandomState'});
    expect(cities).to.equal(undefined);
  }),
  it('should throw an error if no parameter is passed to the function', () => {
    expect(() => api.getCities()).to.throw();
  }),
  it('should throw an error if other parameter but state is passed to the function', () => {
    expect(() => api.getCities({random: 'parameter'})).to.throw();
  })
})