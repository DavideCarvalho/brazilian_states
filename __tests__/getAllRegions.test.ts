import _ from 'lodash';
import {getAllRegions, getCityRegion} from '../src/api/estados';
import {regionType} from '../src/types/regionType';
import {stateType} from '../src/types/stateType';

describe('getAllRegions', () => {
  it('North region should have the right states', () => {
    const northRegionStates = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
    const [middleEastRegion, northEastRegion, northRegion, ...rest] = getAllRegions({shouldReturnEntireJson: true});
    expect(northRegion.regionName).toEqual('Norte');
    _.forEach(northRegion.states, (state) => {
      const stateIndex = northRegionStates.indexOf(state.state);
      expect(state.state).toEqual(northRegionStates[stateIndex]);
    });
  });
  it('NorthEast region should have the right states', () => {
    const northEastRegionStates = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
    const [northRegion, northEastRegion, ...rest] = getAllRegions({shouldReturnEntireJson: true}) as regionType[];
    expect(northEastRegion.regionName).toEqual('Nordeste');
    _.forEach(northEastRegion.states, (state: stateType) => {
      const stateIndex = northEastRegionStates.indexOf(state.state);
      expect(state.state).toEqual(northEastRegionStates[stateIndex]);
    });
  });
  it('MiddleEast region should have the right states', () => {
    const middleEastRegionStates = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
    const [middleEastRegion, ...rest] = getAllRegions({shouldReturnEntireJson: true}) as regionType[];
    expect(middleEastRegion.regionName).toEqual('Centro-Oeste');
    _.forEach(middleEastRegion.states, (state: stateType) => {
      const stateIndex = middleEastRegionStates.indexOf(state.state);
      expect(state.state).toEqual(middleEastRegionStates[stateIndex]);
    });
  });
  it('SouthEast region should have the right states', () => {
    const southEastStates = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
    const [middleEastRegion, northEastRegion, northRegion, southEastRegion, ...rest] = getAllRegions({shouldReturnEntireJson: true}) as regionType[];
    expect(southEastRegion.regionName).toEqual('Sudeste');
    _.forEach(southEastRegion.states, (state: stateType) => {
      const stateIndex = southEastStates.indexOf(state.state);
      expect(state.state).toEqual(southEastStates[stateIndex]);
    });
  });
  it('South region should have the right states', () => {
    const southRegionStates = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
    const [middleEastRegion, northEastRegion, northRegion, southEastRegion, southRegion] = getAllRegions({shouldReturnEntireJson: true});
    expect(southRegion.regionName).toEqual('Sul');
    _.forEach(southRegion.states, (state) => {
      const stateIndex = southRegionStates.indexOf(state.state);
      expect(state.state).toEqual(southRegionStates[stateIndex]);
    });
  });
  it('should return only regions names if shouldReturnEntireJson is not set', () => {
    const [middleEastRegion, northEastRegion, northRegion, southEastRegion, southRegion] = getAllRegions({});
    expect(northRegion).toEqual('Norte');
    expect(northEastRegion).toEqual('Nordeste');
    expect(middleEastRegion).toEqual('Centro-Oeste');
    expect(southEastRegion).toEqual('Sudeste');
    expect(southRegion).toEqual('Sul');
  });
  it('should throw error if shouldReturnEntireJson property is set to null', () => {
    expect(() => getAllRegions({shouldReturnEntireJson: null})).toThrow();
  });
});
