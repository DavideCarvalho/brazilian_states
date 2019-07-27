import Benchmark from 'benchmark';
import util from 'util';
import {eagerMemoization, getCityState} from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';

const suite = new Benchmark.Suite;

const debug = util.debuglog('performance');
const getCityStateOnDemandMemoizedRun = {};

describe('getCityState', () => {
  it('should return json object of the state that has the given city if shouldReturnEntireJson is set to true', () => {
    expect(getCityState({ city: 'Santos', shouldReturnEntireJson: true })).toEqual(spCities);
  });
  it('should return json object if city name is written as guaruja and not Guarujá', () => {
    expect(getCityState({ city: 'guaruja', shouldReturnEntireJson: true })).toEqual(spCities);
  });
  it('should throw an error if shouldReturnEntireJson is a number', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 123 })).toThrow();
  });
  it('should throw an error if shouldReturnEntireJson is a random string', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 'random string' })).toThrow();
  });
  it('should throw an error if shouldReturnEntireJson is a string with true', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 'true' })).toThrow();
  });
  it('should throw an error if shouldReturnEntireJson is a string with false', () => {
    expect(() => getCityState({ city: 'guaruja', shouldReturnEntireJson: 'false' })).toThrow();
  });
  it('should return json object if city name with hyphens searched', () => {
    expect(getCityState({ city: 'Biritiba-Mirim', shouldReturnEntireJson: true })).toEqual(spCities);
  });
  it('should return json object if city name that contains hyphens is searched without hypens', () => {
    expect(getCityState({ city: 'BiritibaMirim', shouldReturnEntireJson: true })).toEqual(spCities);
  });
  it('should return json object if city name that contains hyphens is searched without hypens and lowercased', () => {
    expect(getCityState({ city: 'biritibamirim', shouldReturnEntireJson: true })).toEqual(spCities);
  });
  it('should return json object if city name that contains hyphens is searched without hypens and uppercased', () => {
    expect(getCityState({ city: 'BIRITIBAMIRIM', shouldReturnEntireJson: true })).toEqual(spCities);
  });
  it('second call to getCityState function with the same parameters as the first call should be faster', () => {
    suite
      .add('FirstCall', function() {
        getCityState({ city: 'Santos', shouldReturnEntireJson: true });
      })
      .add('SecondCall', function() {
        getCityState({ city: 'Santos', shouldReturnEntireJson: true });
      })
      .on('complete', function() {
        expect(this.filter('fastest').map('name')).toBe('SecondCall');
      });
  });
  it('should return only the name of the state if shouldReturnEntireJson is not set', () => {
    expect(getCityState({ city: 'Santos' })).toEqual('São Paulo');
  });
  it('should return only the name of the state if shouldReturnEntireJson is set to false', () => {
    expect(getCityState({ city: 'Santos', shouldReturnEntireJson: false })).toEqual('São Paulo');
  });
  it('should return null if nothing is found and shouldReturnEntireJson is true', () => {
    expect(getCityState({ city: 'asldjoijsda', shouldReturnEntireJson: true }))
      .toEqual(null);
  });
  it('should return null if nothing is found and shouldReturnEntireJson is false', () => {
    expect(getCityState({ city: 'asldjoijsda', shouldReturnEntireJson: false }))
      .toEqual(null);
  });
  it('should return null if nothing is found and shouldReturnEntireJson is not set', () => {
    expect(getCityState({ city: 'asldjoijsda' })).toEqual(null);
  });
  it('should throw an error if no object is set', () => {
    expect(() => getCityState()).toThrow();
  });
  it('should throw an error if an object with no city property is set', () => {
    expect(() => getCityState({ random: 'property' })).toThrow();
  });
  it('should make getCityState call after eagerMemoization faster than first call without eagerMemoization', () => {
    suite
      .add('FirstCall', function() {
        getCityState({ city: 'Guarujá' });
      })
      .add('memoization', function() {
        eagerMemoization();
      })
      .add('SecondCall', function() {
        getCityState({ city: 'Santos' });
      })
      .on('complete', function() {
        expect(this.filter('fastest').map('name')).toBe('SecondCall')
      });
  });
});
