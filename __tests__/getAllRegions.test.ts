import _ from 'lodash';
import { getAllRegions } from '../src/api/estados';

describe('getAllRegions', () => {
  it('North region should have the right states', () => {
    const northRegionStates = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
    const [middleEastRegion, northEastRegion, northRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(northRegion.regionName).toEqual('Norte');
    _.forEach(northRegion.states, (state) => {
      const stateIndex = northRegionStates.indexOf(state.state);
      expect(state.state).toEqual(northRegionStates[stateIndex]);
    });
  });
  it('NorthEast region should have the right states', () => {
    const northEastRegionStates = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
    const [northRegion, northEastRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(northEastRegion.regionName).toEqual('Nordeste');
    _.forEach(northEastRegion.states, (state) => {
      const stateIndex = northEastRegionStates.indexOf(state.state);
      expect(state.state).toEqual(northEastRegionStates[stateIndex]);
    });
  });
  it('MiddleEast region should have the right states', () => {
    const middleEastRegionStates = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
    const [middleEastRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(middleEastRegion.regionName).toEqual('Centro-Oeste');
    _.forEach(middleEastRegion.states, (state: string) => {
      const stateIndex = middleEastRegionStates.indexOf(state.state);
      expect(state.state).toEqual(middleEastRegionStates[stateIndex]);
    });
  });
  it('SouthEast region should have the right states', () => {
    const southEastStates = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
    const [middleEastRegion, northEastRegion, northRegion, southEastRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(southEastRegion.regionName).toEqual('Sudeste');
    _.forEach(southEastRegion.states, (state) => {
      const stateIndex = southEastStates.indexOf(state.state);
      expect(state.state).toEqual(southEastStates[stateIndex]);
    });
  });
  it('South region should have the right states', () => {
    const southRegionStates = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
    const [middleEastRegion, northEastRegion, northRegion, southEastRegion, southRegion] = getAllRegions({ shouldReturnEntireJson: true });
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
});