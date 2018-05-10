import _ from 'lodash';
import { expect } from 'chai';
import { getRegion } from '../src/api/estados';

describe('getRegion', () => {
  it('should return only north region', () => {
    const [northRegion] = getRegion({ region: ['Norte'] });
    expect(northRegion.regionName).to.be.equal('Norte');
  });
  it('should return only northeast region', () => {
    const [northEastRegion] = getRegion({ region: ['Nordeste'] });
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
  });
  it('should return only middleeast region', () => {
    const [middleEastRegion] = getRegion({ region: ['Centro-Oeste'] });
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
  });
  it('should return only southeast region', () => {
    const [southEastRegion] = getRegion({ region: ['Sudeste'] });
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
  });
  it('should return only south region', () => {
    const [southRegion] = getRegion({ region: ['Sul'] });
    expect(southRegion.regionName).to.be.equal('Sul');
  });
  it('should return two regions', () => {
    const [southRegion, southEastRegion] = getRegion({ region: ['Sul', 'Sudeste'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
  });
  it('should return three regions', () => {
    const [southRegion, southEastRegion, middleEastRegion] = getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
  });
  it('should return four regions', () => {
    const [southRegion, southEastRegion, middleEastRegion, northEastRegion] = getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
  });
  it('should return five regions', () => {
    const [southRegion, southEastRegion, middleEastRegion, northEastRegion, northRegion] = getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste', 'Norte'] });
    expect(southRegion.regionName).to.be.equal('Sul');
    expect(southEastRegion.regionName).to.be.equal('Sudeste');
    expect(middleEastRegion.regionName).to.be.equal('Centro-Oeste');
    expect(northEastRegion.regionName).to.be.equal('Nordeste');
    expect(northRegion.regionName).to.be.equal('Norte');
  });
  it('should return empty array if input is an empty array', () => {
    const result = getRegion({ region: [] });
    expect(result).to.deep.equal([]);
  });
  it('should throw an error if no object is sent to the function', () => {
    expect(() => getRegion()).to.throw();
  });
  it('should throw an error if an object without an region property is sent to the function', () => {
    expect(() => getRegion({ random: 'property' })).to.throw();
  });
});
