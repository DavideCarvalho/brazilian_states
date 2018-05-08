import _ from 'lodash';
import { expect } from 'chai';
import util from 'util';
import { performance as _performance } from 'perf_hooks';
import { getCityState, eagerMemoization } from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';

const debug = util.debuglog('performance');
let getCityStateOnDemandMemoizedRun = {};

describe('getCityState', () => {
  it('should return json object of the state that has the given city if shouldReturnEntireJson is set to true', () => {
    expect(getCityState({ city: 'Santos', shouldReturnEntireJson: true })).to.deep.equal(spCities);
  });
  it('should return json object if city name is written as guaruja and not Guarujá', () => {
    expect(getCityState({ city: 'guaruja', shouldReturnEntireJson: true })).to.deep.equal(spCities);
  });
  it('should throw an error if shouldReturnEntireJson is a number', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 123 })).to.throw();
  });
  it('should throw an error if shouldReturnEntireJson is a random string', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 'random string' })).to.throw();
  });
  it('should throw an error if shouldReturnEntireJson is a string with true', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 'true' })).to.throw();
  });
  it('should throw an error if shouldReturnEntireJson is a string with false', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 'false' })).to.throw();
  });
  it('second call to getCityState function with the same parameters as the first call should be faster', () => {
    _performance.mark('starting first run');
    getCityState({ city: 'Santos', shouldReturnEntireJson: true });
    _performance.mark('ending first run');
    _performance.mark('starting memoized run');
    getCityState({ city: 'Santos', shouldReturnEntireJson: true });
    _performance.mark('ending memoized run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning memoized run', 'starting memoized run', 'ending memoized run');
    const [firstCall, memoizedCall] = _performance.getEntriesByType('measure');
    getCityStateOnDemandMemoizedRun = memoizedCall;
    expect(memoizedCall.duration).to.be.below(firstCall.duration);
  });
  it('should return only the name of the state if shouldReturnEntireJson is not set', () => {
    expect(getCityState({ city: 'Santos' })).to.be.equal('São Paulo');
  });
  it('should return only the name of the state if shouldReturnEntireJson is set to false', () => {
    expect(getCityState({ city: 'Santos', shouldReturnEntireJson: false })).to.be.equal('São Paulo');
  });
  it('should return empty array if nothing is found and shouldReturnEntireJson is true', () => {
    expect(getCityState({ city: 'asldjoijsda', shouldReturnEntireJson: true }))
      .to.be.deep.equal({});
  });
  it('should return empty string if nothing is found and shouldReturnEntireJson is false', () => {
    expect(getCityState({ city: 'asldjoijsda', shouldReturnEntireJson: false }))
      .to.be.deep.equal('');
  });
  it('should return empty string if nothing is found and shouldReturnEntireJson is not set', () => {
    expect(getCityState({ city: 'asldjoijsda' })).to.be.deep.equal('');
  });
  it('should throw an error if no object is set', () => {
    expect(() => getCityState()).to.throw();
  });
  it('should throw an error if an object with no city property is set', () => {
    expect(() => getCityState({ random: 'property' })).to.throw();
  });
  it('should make getCityState call after eagerMemoization as fast as on demand memoized call', () => {
    _performance.mark('starting first run');
    getCityState({ city: 'Guarujá' });
    _performance.mark('ending first run');
    eagerMemoization();
    _performance.mark('starting second run');
    getCityState({ city: 'Santos' });
    _performance.mark('ending second run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning second run', 'starting second run', 'ending second run');
    const [firstCallAfterEagerMemoization, getCityStateEagerMemoizationRun] = _performance.getEntriesByType('measure');
    expect(getCityStateEagerMemoizationRun.duration)
      .to.be.equal(getCityStateOnDemandMemoizedRun.duration);
  });
});
