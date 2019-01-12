import _ from 'lodash';
import { getRegion } from '../src/api/estados';

describe('getRegion', () => {
  it('should return only north region', () => {
    const [northRegion] = getRegion({ region: ['Norte'] });
    expect(northRegion.regionName).toEqual('Norte');
  });
  it('should return only northeast region', () => {
    const [northEastRegion] = getRegion({ region: ['Nordeste'] });
    expect(northEastRegion.regionName).toEqual('Nordeste');
  });
  it('should return only middleeast region', () => {
    const [middleEastRegion] = getRegion({ region: ['Centro-Oeste'] });
    expect(middleEastRegion.regionName).toEqual('Centro-Oeste');
  });
  it('should return only southeast region', () => {
    const [southEastRegion] = getRegion({ region: ['Sudeste'] });
    expect(southEastRegion.regionName).toEqual('Sudeste');
  });
  it('should return only south region', () => {
    const [southRegion] = getRegion({ region: ['Sul'] });
    expect(southRegion.regionName).toEqual('Sul');
  });
  it('should return two regions', () => {
    const [southRegion, southEastRegion] = getRegion({ region: ['Sul', 'Sudeste'] });
    expect(southRegion.regionName).toEqual('Sul');
    expect(southEastRegion.regionName).toEqual('Sudeste');
  });
  it('should return three regions', () => {
    const [southRegion, southEastRegion, middleEastRegion] = getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste'] });
    expect(southRegion.regionName).toEqual('Sul');
    expect(southEastRegion.regionName).toEqual('Sudeste');
    expect(middleEastRegion.regionName).toEqual('Centro-Oeste');
  });
  it('should return four regions', () => {
    const [southRegion, southEastRegion, middleEastRegion, northEastRegion] = getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste'] });
    expect(southRegion.regionName).toEqual('Sul');
    expect(southEastRegion.regionName).toEqual('Sudeste');
    expect(middleEastRegion.regionName).toEqual('Centro-Oeste');
    expect(northEastRegion.regionName).toEqual('Nordeste');
  });
  it('should return five regions', () => {
    const [southRegion, southEastRegion, middleEastRegion, northEastRegion, northRegion] = getRegion({ region: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste', 'Norte'] });
    expect(southRegion.regionName).toEqual('Sul');
    expect(southEastRegion.regionName).toEqual('Sudeste');
    expect(middleEastRegion.regionName).toEqual('Centro-Oeste');
    expect(northEastRegion.regionName).toEqual('Nordeste');
    expect(northRegion.regionName).toEqual('Norte');
  });
  it('should return empty array if input is an empty array', () => {
    const result = getRegion({ region: [] });
    expect(result).toEqual([]);
  });
  it('should throw an error if no object is sent to the function', () => {
    expect(() => getRegion()).toThrow();
  });
  it('should throw an error if region is set to null', () => {
    expect(() => getRegion({ region: null })).toThrow();
  });
  it('should throw an error if region is set to null', () => {
    expect(() => getRegion({ region: undefined })).toThrow();
  });
  it('should throw an error if region is not an array', () => {
    expect(() => getRegion({ region: 'testing' })).toThrow();
  });
  it('should throw an error if an object without an region property is sent to the function', () => {
    expect(() => getRegion({ random: 'property' })).toThrow();
  });
});
