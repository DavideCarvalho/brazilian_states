import { getRegionStates, Region } from '../src/api/estados';

describe('getRegion', () => {
  it('should return only north region', () => {
    const northRegionStates: string[] = [
      'Acre',
      'Amapá',
      'Amazonas',
      'Pará',
      'Rondonia',
      'Roraima',
      'Tocantins',
    ];
    const result = getRegionStates({ name: Region.North });
    expect(northRegionStates.sort()).toEqual(result.sort());
  });
  it('should return only northeast region', () => {
    const northEastRegionStates: string[] = [
      'Alagoas',
      'Bahia',
      'Maranhão',
      'Paraiba',
      'Pernambuco',
      'Piauí',
      'Rio Grande do Norte',
      'Sergipe',
    ];
    const result = getRegionStates({ name: Region.NorthEast });
    console.log(result);
    console.log(northEastRegionStates);
    expect(northEastRegionStates.sort()).toEqual(result.sort());
  });
  it('should return only middleeast region', () => {
    const middleEastRegionStates: string[] = [
      'Distrito Federal',
      'Goiás',
      'Mato Grosso',
      'Mato Grosso do Sul',
    ];
    const result = getRegionStates({ name: Region.MiddleEast });
    expect(middleEastRegionStates.sort()).toEqual(result.sort());
  });
  it('should return only southeast region', () => {
    const southEastStates: string[] = [
      'São Paulo',
      'Rio de Janeiro',
      'Espírito Santo',
      'Minas Gerais',
    ];
    const result = getRegionStates({ name: Region.SouthEast });
    expect(southEastStates.sort()).toEqual(result.sort());
  });
  it('should return only south region', () => {
    const southRegionStates: string[] = [
      'Paraná',
      'Rio Grande do Sul',
      'Santa Catarina',
    ];
    const result = getRegionStates({ name: Region.South });
    expect(southRegionStates.sort()).toEqual(result.sort());
  });
});
