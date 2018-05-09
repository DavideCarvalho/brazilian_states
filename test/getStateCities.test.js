import _ from 'lodash';
import { expect } from 'chai';
import util from 'util';
import { performance as _performance } from 'perf_hooks';
import { getStateCities, eagerMemoization } from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';

const debug = util.debuglog('performance');
let getStateCitiesOnDemandMemoizedRun = {};

describe('getStateCities', () => {
  it('should return the given state from fullname', () => {
    const cities = getStateCities({ state: 'São Paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name doesnt have accents', () => {
    const cities = getStateCities({ state: 'Sao Paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase and doesnt have accents', () => {
    const cities = getStateCities({ state: 'sao paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by spaces', () => {
    const cities = getStateCities({ state: 'saopaulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by hyphen', () => {
    const cities = getStateCities({ state: 'sao-paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by underline', () => {
    const cities = getStateCities({ state: 'sao_paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return undefined if fullname state not found', () => {
    const cities = getStateCities({ state: 'someRandomState' });
    expect(cities).to.equal(undefined);
  });
  it('should return the given state from abbreviation', () => {
    const cities = getStateCities({ state: 'sp' });
    expect(cities).to.deep.equal(spCities);
  });
  it('second call to getStateCities function with the same parameters as the first call should be faster', () => {
    _performance.mark('starting first run');
    getStateCities({ state: 'sp' });
    _performance.mark('ending first run');
    _performance.mark('starting memoized run');
    getStateCities({ state: 'sp' });
    _performance.mark('ending memoized run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning memoized run', 'starting memoized run', 'ending memoized run');
    const [firstCall, memoizedCall] = _performance.getEntriesByType('measure');
    getStateCitiesOnDemandMemoizedRun = memoizedCall;
    expect(memoizedCall.duration).to.be.below(firstCall.duration);
  });
  it('should return undefined if abbreviation state not found', () => {
    const cities = getStateCities({ state: 'someRandomState' });
    expect(cities).to.equal(undefined);
  });
  it('should throw an error if no parameter is passed to the function', () => {
    expect(() => getStateCities()).to.throw();
  });
  it('should throw an error if other parameter but state is passed to the function', () => {
    expect(() => getStateCities({ random: 'parameter' })).to.throw();
  });
  it('should make getStateCities call after eagerMemoization as fast as on demand memoized call', () => {
    _performance.mark('starting first run');
    getStateCities({ state: 'São Paulo' });
    _performance.mark('ending first run');
    eagerMemoization();
    _performance.mark('starting second run');
    getStateCities({ state: 'Rio de Janeiro' });
    _performance.mark('ending second run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning second run', 'starting second run', 'ending second run');
    const [firstCallAfterEagerMemoization, getStateCitiesEagerMemoizationRun] = _performance.getEntriesByType('measure');
    expect(getStateCitiesEagerMemoizationRun.duration)
      .to.be.equal(getStateCitiesOnDemandMemoizedRun.duration);
  });
});