import _ from 'lodash';
import { expect } from 'chai';
import { getAllRegions } from '../src/api/estados';

describe('getAllRegions', () => {
  it('North region should have the right states', () => {
    const northRegionStates = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
    const [northRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(northRegion.regionName).to.be.equal('Norte');
    _.forEach(northRegion.states, (state) => {
      const stateIndex = northRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(northRegionStates[stateIndex]);
    });
  });
  it('NorthEast region should have the right states', () => {
    const northEastRegionStates = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
    const [northRegion, northEastRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
    _.forEach(northEastRegion.states, (state) => {
      const stateIndex = northEastRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(northEastRegionStates[stateIndex]);
    });
  });
  it('MiddleEast region should have the right states', () => {
    const middleEastRegionStates = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
    const [northRegion, northEastRegion, middleEastRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
    _.forEach(middleEastRegion.states, (state) => {
      const stateIndex = middleEastRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(middleEastRegionStates[stateIndex]);
    });
  });
  it('SouthEast region should have the right states', () => {
    const southEastStates = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
    const [northRegion, northEastRegion, middleEastRegion, southEastRegion, ...rest] = getAllRegions({ shouldReturnEntireJson: true });
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    _.forEach(southEastRegion.states, (state) => {
      const stateIndex = southEastStates.indexOf(state.state);
      expect(state.state).to.be.equal(southEastStates[stateIndex]);
    });
  });
  it('South region should have the right states', () => {
    const southRegionStates = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
    const [northRegion, northEastRegion, middleEastRegion, southEastRegion, southRegion] = getAllRegions({ shouldReturnEntireJson: true });
    expect(southRegion.regionName).to.be.equal('Sul');
    _.forEach(southRegion.states, (state) => {
      const stateIndex = southRegionStates.indexOf(state.state);
      expect(state.state).to.be.equal(southRegionStates[stateIndex]);
    });
  });
  it('should return only regions names if shouldReturnEntireJson is not set', () => {
    const [northRegion, northEastRegion, middleEastRegion, southEastRegion, southRegion] = getAllRegions({});
    expect(northRegion).to.be.equal('Norte');
    expect(northEastRegion).to.be.equal('Nordeste');
    expect(middleEastRegion).to.be.equal('Centro-Oeste');
    expect(southEastRegion).to.be.equal('Sudeste');
    expect(southRegion).to.be.equal('Sul');
  });
});