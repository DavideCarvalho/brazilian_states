import _ from 'lodash';
import { expect } from 'chai';
import util from 'util';
import { performance as _performance } from 'perf_hooks';
import api, { requiredParam } from '../src/api/estados';
import spCities from '../src/api/estados/saopaulo';

const debug = util.debuglog('performance');
let getStateCitiesOnDemandMemoizedRun = {};
let getCityStateOnDemandMemoizedRun = {};

describe('state', () => {
  it('should return the given state from fullname', () => {
    const cities = api.getStateCities({ state: 'São Paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name doesnt have accents', () => {
    const cities = api.getStateCities({ state: 'Sao Paulo' });
    expect(cities).to.deep.equal(spCities);
  });
  it('should return the given state from fullname even if the name is on lowercase and doesnt have accents', () => {
    const cities = api.getStateCities({ state: 'sao Paulo' });
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
    getStateCitiesOnDemandMemoizedRun = memoizedCall;
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
  it('should return json object if city name is written as guaruja and not Guarujá', () => {
    expect(api.getCityState({ city: 'guaruja', shouldReturnEntireJson: true })).to.deep.equal(spCities);
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
    getCityStateOnDemandMemoizedRun = memoizedCall;
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
  it('should throw an error if no object is set', () => {
    expect(() => api.getCityState()).to.throw();
  });
  it('should throw an error if an object with no city property is set', () => {
    expect(() => api.getCityState({ random: 'property' })).to.throw();
  });
  it('should throw the required param', () => {
    expect(() => requiredParam('myParam')).to.throw();
  });
  it('should make getStateCities call after eagerMemoization as fast as on demand memoized call', () => {
    _performance.mark('starting first run');
    api.getStateCities({ state: 'São Paulo' });
    _performance.mark('ending first run');
    api.eagerMemoization();
    _performance.mark('starting second run');
    api.getStateCities({ state: 'Rio de Janeiro' });
    _performance.mark('ending second run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning second run', 'starting second run', 'ending second run');
    const [firstCallAfterEagerMemoization, getStateCitiesEagerMemoizationRun] = _performance.getEntriesByType('measure');
    expect(getStateCitiesEagerMemoizationRun.duration)
      .to.be.equal(getStateCitiesOnDemandMemoizedRun.duration);
  });
  it('should make getCityState call after eagerMemoization as fast as on demand memoized call', () => {
    _performance.mark('starting first run');
    api.getCityState({ city: 'Guarujá' });
    _performance.mark('ending first run');
    api.eagerMemoization();
    _performance.mark('starting second run');
    api.getCityState({ city: 'Santos' });
    _performance.mark('ending second run');
    _performance.measure('returning first run', 'starting first run', 'ending first run');
    _performance.measure('returning second run', 'starting second run', 'ending second run');
    const [firstCallAfterEagerMemoization, getCityStateEagerMemoizationRun] = _performance.getEntriesByType('measure');
    expect(getCityStateEagerMemoizationRun.duration)
      .to.be.equal(getCityStateOnDemandMemoizedRun.duration);
  });
  it('North region should have the right states from getAllRegions', () => {
    const northRegionStates: Array<string> = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
    const [ northRegion, ...rest ] = api.getAllRegions();
    expect(northRegion.regionName).to.be.equal('Norte');
    _.forEach(northRegion.states, (state) => {
      const stateIndex = northRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(northRegionStates[stateIndex]);
    });
  });
  it('NorthEast region should have the right states from getAllRegions', () => {
    const northEastRegionStates: Array<string> = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
    const [northRegion, northEastRegion, ...rest] = api.getAllRegions();
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
    _.forEach(northEastRegion.states, (state) => {
      const stateIndex = northEastRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(northEastRegionStates[stateIndex]);
    });
  });
  it('MiddleEast region should have the right states from getAllRegions', () => {
    const middleEastRegionStates: Array<string> = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
    const [northRegion, northEastRegion, middleEastRegion, ...rest] = api.getAllRegions();
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
    _.forEach(middleEastRegion.states, (state) => {
      const stateIndex = middleEastRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(middleEastRegionStates[stateIndex]);
    });
  });
  it('SouthEast region should have the right states from getAllRegions', () => {
    const southEastStates: Array<string> = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
    const [northRegion, northEastRegion, middleEastRegion, southEastRegion, ...rest] = api.getAllRegions();
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    _.forEach(southEastRegion.states, (state) => {
      const stateIndex = southEastStates.indexOf(state.state);
      expect(state.state).to.be.equal(southEastStates[stateIndex]);
    });
  });
  it('South region should have the right states from getAllRegions', () => {
    const southRegionStates = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
    const [northRegion, northEastRegion, middleEastRegion, southEastRegion, southRegion] = api.getAllRegions();
    expect(southRegion.regionName).to.be.equal('Sul');
    _.forEach(southRegion.states, (state) => {
      const stateIndex = southRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(southRegionStates[stateIndex]);
    });
  });
  it('should return only north region', () => {
    const region = api.getRegion({ region: 'Norte' });
    expect(region.regionName).to.be.equal('Norte');
  });
  it('should return only northeast region', () => {
    const region = api.getRegion({ region: 'Nordeste' });
    expect(region.regionName).to.be.equal('Nordeste');
  });
  it('should return only middleeast region', () => {
    const region = api.getRegion({ region: 'Centro-Oeste' });
    expect(region.regionName).to.be.equal('Centro-Oeste');
  });
  it('should return only southeast region', () => {
    const region = api.getRegion({ region: 'Sudeste' });
    expect(region.regionName).to.be.equal('Sudeste');
  });
  it('should return only south region', () => {
    const region = api.getRegion({ region: 'Sul' });
    expect(region.regionName).to.be.equal('Sul');
  });
  it('should return two regions', () => {
    const [southRegion, southEastRegion] = api.getRegion({ region: ['Sul', 'Sudeste'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
  });
  it('should return three regions', () => {
    const [southRegion, southEastRegion, middleEastRegion] = api.getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
  });
  it('should return four regions', () => {
    const [southRegion, southEastRegion, middleEastRegion, northEastRegion] = api.getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
  });
  it('should return five regions', () => {
    const [southRegion, southEastRegion, middleEastRegion, northEastRegion, northRegion] = api.getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste', 'Norte'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
    expect(northRegion.regionName).to.be.equal('Norte');
  });
  it('should return empty array if input is an empty array', () => {
    const result = api.getRegion({ region: [] });
    expect(result).to.deep.equal([]);
  });
  it('should throw an error if no object is sent to the function', () => {
    expect(() => api.getRegion()).to.throw();
  });
  it('should throw an error if an object without an region property is sent to the function', () => {
    expect(() => api.getRegion({ random: 'property' })).to.throw();
  });
});
