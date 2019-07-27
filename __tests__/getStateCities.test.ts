import _ from 'lodash';
import util from 'util';
import { performance as _performance } from 'perf_hooks';
import { getStateCities, eagerMemoization } from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';
import Benchmark from 'benchmark';
const suite = new Benchmark.Suite;

const debug = util.debuglog('performance');
let getStateCitiesOnDemandMemoizedRun = {};

describe('getStateCities', () => {
  it('should return the given state from fullname', () => {
    const cities = getStateCities({ state: 'São Paulo' });
    expect(cities).toEqual(spCities);
  });
  it('should return the given state from fullname even if the name doesnt have accents', () => {
    const cities = getStateCities({ state: 'Sao Paulo' });
    expect(cities).toEqual(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase and doesnt have accents', () => {
    const cities = getStateCities({ state: 'sao paulo' });
    expect(cities).toEqual(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by spaces', () => {
    const cities = getStateCities({ state: 'saopaulo' });
    expect(cities).toEqual(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by hyphen', () => {
    const cities = getStateCities({ state: 'sao-paulo' });
    expect(cities).toEqual(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase, doesnt have accents and its not separated by underline', () => {
    const cities = getStateCities({ state: 'sao_paulo' });
    expect(cities).toEqual(spCities);
  });
  it('should return null if fullname state not found', () => {
    const cities = getStateCities({ state: 'someRandomState' });
    expect(cities).toEqual(null);
  });
  it('should return the given state from abbreviation', () => {
    const cities = getStateCities({ state: 'sp' });
    expect(cities).toEqual(spCities);
  });
  it('second call to getStateCities function with the same parameters as the first call should be faster', () => {
    suite
      .add('FirstCall', function() {
        getStateCities({ state: 'sp' });
      })
      .add('SecondCall', function() {
        getStateCities({ state: 'sp' });
      })
      .on('complete', function() {
        // console.log('Fastest is ' + this.filter('fastest').map('name'));
        expect(this.filter('fastest').map('name')).toBe('SecondCall')
      });
  });
  it('should return null if abbreviation state not found', () => {
    const cities = getStateCities({ state: 'someRandomState' });
    expect(cities).toEqual(null);
  });
  it('should throw an error if no parameter is passed to the function', () => {
    expect(() => getStateCities()).toThrow();
  });
  it('should throw an error if other parameter but state is passed to the function', () => {
    expect(() => getStateCities({ random: 'parameter' })).toThrow();
  });
  it('should make getStateCities call after eagerMemoization than first call without eagerMemoization', () => {
    suite
      .add('FirstCall', function() {
        getStateCities({ state: 'São Paulo' });
      })
      .add('memoization', function() {
        eagerMemoization();
      })
      .add('SecondCall', function() {
        getStateCities({ state: 'Rio de Janeiro' });
      })
      .on('complete', function() {
        // console.log('Fastest is ' + this.filter('fastest').map('name'));
        expect(this.filter('fastest').map('name')).toBe('SecondCall');
      });
  });
});
