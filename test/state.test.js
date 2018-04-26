const api = require('../index');
const spCities = require('../src/api/estados/saopaulo');
const _ = require('lodash');
const { expect } = require('chai');
const _performance = require('perf_hooks').performance;
const util = require('util');
const debug = util.debuglog('performance');

describe('state', () => {
  it('should return the given state from fullname', () => {
    const cities = api.getStateCities({ state: 'São Paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return undefined if fullname state not found', () => {
    const cities = api.getStateCities({ state: 'someRandomState' });
    expect(cities).to.equal(undefined);
  });
  it('should return the given state from abbreviation', () => {
    const cities = api.getStateCities({ state: 'sp' });
    expect(cities).to.deep.equal(spCities);
  });
  it('second call to getStateCities function with the same parameters as the first call should be faster', () => {
    _performance.mark('starting first run');
    api.getStateCities({ state: 'sp' });
    _performance.mark('ending first run');
    _performance.mark('starting memoized run');
    api.getStateCities({ state: 'sp' });
    _performance.mark('ending memoized run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning memoized run', 'starting memoized run', 'ending memoized run');
    const [firstCall, memoizedCall] = _performance.getEntriesByType('measure');
    expect(memoizedCall.duration).to.be.below(firstCall.duration);
  });
  it('should return undefined if abbreviation state not found', () => {
    const cities = api.getStateCities({ state: 'someRandomState' });
    expect(cities).to.equal(undefined);
  });
  it('should throw an error if no parameter is passed to the function', () => {
    expect(() => api.getStateCities()).to.throw();
  });
  it('should throw an error if other parameter but state is passed to the function', () => {
    expect(() => api.getStateCities({ random: 'parameter' })).to.throw();
  });
  it('should return json object of the state that has the given city if shouldReturnEntireJson is set to true', () => {
    expect(api.getCityState({ city: 'Santos', shouldReturnEntireJson: true })).to.deep.equal(spCities);
  });
  it('second call to getCityState function with the same parameters as the first call should be faster', () => {
    _performance.mark('starting first run');
    api.getCityState({ city: 'Santos', shouldReturnEntireJson: true });
    _performance.mark('ending first run');
    _performance.mark('starting memoized run');
    api.getCityState({ city: 'Santos', shouldReturnEntireJson: true });
    _performance.mark('ending memoized run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning memoized run', 'starting memoized run', 'ending memoized run');
    const [firstCall, memoizedCall] = _performance.getEntriesByType('measure');
    expect(memoizedCall.duration).to.be.below(firstCall.duration);
  });
  it('should return only the name of the state if shouldReturnEntireJson is not set', () => {
    expect(api.getCityState({ city: 'Santos' })).to.be.equal('São Paulo');
  });
  it('should return only the name of the state if shouldReturnEntireJson is set to false', () => {
    expect(api.getCityState({ city: 'Santos', shouldReturnEntireJson: false })).to.be.equal('São Paulo');
  });
  it('should return empty array if nothing is found and shouldReturnEntireJson is true', () => {
    expect(api.getCityState({ city: 'asldjoijsda', shouldReturnEntireJson: true }))
      .to.be.deep.equal({});
  });
  it('should return empty string if nothing is found and shouldReturnEntireJson is false', () => {
    expect(api.getCityState({ city: 'asldjoijsda', shouldReturnEntireJson: false }))
      .to.be.deep.equal('');
  });
  it('should return empty string if nothing is found and shouldReturnEntireJson is not set', () => {
    expect(api.getCityState({ city: 'asldjoijsda' })).to.be.deep.equal('');
  });
});
