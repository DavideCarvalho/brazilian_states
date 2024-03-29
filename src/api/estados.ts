import filter from 'lodash/filter';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import removeAccents from 'remove-accents';
import { memoizedCityType } from '../types/memoizedCityType';
import { memoizedRegionWithStateType } from '../types/memoizedRegionWithStateType';
import { memoizedStateType } from '../types/memoizedStateType';
import { regionType } from '../types/regionType';
import { regionWithStateType } from '../types/regionWithStateType';
import { stateType } from '../types/stateType';
import ac from './estados/acre';
import al from './estados/alagoas';
import ap from './estados/amapa';
import am from './estados/amazonas';
import ba from './estados/bahia';
import ce from './estados/ceara';
import df from './estados/df';
import es from './estados/espiritosanto';
import go from './estados/goias';
import ma from './estados/maranhao';
import mt from './estados/matogrosso';
import ms from './estados/matogrossodosul';
import mg from './estados/minasgerais';
import pa from './estados/para';
import pb from './estados/paraiba';
import pr from './estados/parana';
import pe from './estados/pernambuco';
import pi from './estados/piaui';
import rj from './estados/riodejaneiro';
import rn from './estados/riograndedonorte';
import rs from './estados/riograndedosul';
import ro from './estados/rondonia';
import rr from './estados/roraima';
import sc from './estados/santacatarina';
import sp from './estados/saopaulo';
import se from './estados/sergipe';
import to from './estados/tocantins';

const states: stateType[] = [
  ac,
  al,
  am,
  ap,
  ba,
  ce,
  df,
  es,
  go,
  ma,
  mg,
  ms,
  mt,
  pa,
  pb,
  pi,
  pr,
  rj,
  rn,
  ro,
  rr,
  rs,
  sc,
  se,
  sp,
  to,
  pe,
];

const southEastStates: string[] = [
  'São Paulo',
  'Rio de Janeiro',
  'Espírito Santo',
  'Minas Gerais',
];
const southRegionStates: string[] = [
  'Paraná',
  'Rio Grande do Sul',
  'Santa Catarina',
];
const northRegionStates: string[] = [
  'Acre',
  'Amapá',
  'Amazonas',
  'Pará',
  'Rondonia',
  'Roraima',
  'Tocantins',
];
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
const middleEastRegionStates: string[] = [
  'Distrito Federal',
  'Goiás',
  'Mato Grosso',
  'Mato Grosso do Sul',
];

const southEastRegionStatesAndCities = filter(
  states,
  (state) => southEastStates.indexOf(state.state) !== -1,
);
const southRegionStatesAndCities = filter(
  states,
  (state) => southRegionStates.indexOf(state.state) !== -1,
);
const northRegionStatesAndCities = filter(
  states,
  (state) => northRegionStates.indexOf(state.state) !== -1,
);
const northEastRegionStatesAndCities = filter(
  states,
  (state) => northEastRegionStates.indexOf(state.state) !== -1,
);
const middleEastRegionStatesAndCities = filter(
  states,
  (state) => middleEastRegionStates.indexOf(state.state) !== -1,
);

export enum Region {
  North = 'Norte',
  NorthEast = 'Nordeste',
  MiddleEast = 'Centro-Oeste',
  SouthEast = 'Sudeste',
  South = 'Sul',
}

const southEastRegionData: regionType = {
  regionName: Region.SouthEast,
  states: southEastRegionStatesAndCities,
};

const southRegionData: regionType = {
  regionName: Region.South,
  states: southRegionStatesAndCities,
};

const northRegionData: regionType = {
  regionName: Region.North,
  states: northRegionStatesAndCities,
};

const northEastRegionData: regionType = {
  regionName: Region.NorthEast,
  states: northEastRegionStatesAndCities,
};

const middleEastRegionData: regionType = {
  regionName: Region.MiddleEast,
  states: middleEastRegionStatesAndCities,
};

interface RegionsType {
  centrooeste: regionType;
  nordeste: regionType;
  norte: regionType;
  sudeste: regionType;
  sul: regionType;
}

const regions: RegionsType = {
  centrooeste: middleEastRegionData,
  nordeste: northEastRegionData,
  norte: northRegionData,
  sudeste: southEastRegionData,
  sul: southRegionData,
};

type RegionTypeKeys = keyof RegionsType;

const normalizedCities = map(states, (state: stateType) => {
  const stateCitiesNormalized = map(state.cities, (city) =>
    removeAccents(city.replace(/\s|-|_/g, '').toLowerCase()),
  );
  return { ...state, cities: stateCitiesNormalized };
});

const memoizedStates: memoizedStateType = {};
const memoizedCities: memoizedCityType = {};
const memoizedRegions: memoizedRegionWithStateType = {};

export const checkIfVariableIsBoolean = (
  variable: boolean,
  variableName: string,
): void => {
  if (variable !== true && variable !== false)
    throw new Error(`"${variableName}" parameter should be of boolean type`);
};

export const requiredParam = (param: string) => {
  throw new Error(`Required parameter, "${param}" is missing.`);
};

export function getAllRegions(): Region[] {
  return [
    Region.North,
    Region.NorthEast,
    Region.MiddleEast,
    Region.SouthEast,
    Region.South,
  ];
}

interface GetRegionParams {
  name: Region;
}

export function getRegionStates({
  name = requiredParam('name'),
}: GetRegionParams): string[] | undefined {
  if (!name) throw new Error('region property cannot be null');
  if (typeof name !== 'string')
    throw new Error('state property should be a string');
  const normalizedRegionName = removeAccents(
    name.replace(/\s|-|_/g, '').toLowerCase(),
  ) as RegionTypeKeys;
  const region = regions[normalizedRegionName];
  if (!region) return undefined;
  return map(region.states, (state) => state.state);
}

interface GetStateRegionParams {
  state: string;
}

export function getStateRegion({
  state = requiredParam('state'),
}: GetStateRegionParams): string | undefined {
  if (!state) throw new Error('state property cannot be null');
  if (typeof state !== 'string')
    throw new Error('state property should be a string');
  const normalizedStateName = removeAccents(
    state.replace(/\s|-|_/g, '').toLowerCase(),
  );
  const memoizedStateRegion = memoizedRegions[normalizedStateName];
  if (memoizedStateRegion) return memoizedStateRegion.regionName;
  const foundRegion: regionType | undefined = reduce<
    RegionsType,
    regionType | undefined
  >(
    regions,
    (acc: regionType | undefined, region: regionType) => {
      const filteredRegion: stateType[] = region.states.filter(
        (regionState) => {
          return (
            removeAccents(
              regionState.state.replace(/\s|-|_/g, '').toLowerCase(),
            ) === normalizedStateName
          );
        },
      );
      if (filteredRegion.length > 0) return region;
      return acc;
    },
    undefined,
  );
  if (!foundRegion) return undefined;
  memoizedRegions[state] = foundRegion;
  return foundRegion.regionName;
}

interface GetCityRegionParams {
  city: string;
}

export function getCityRegion({
  city = requiredParam('city'),
}: GetCityRegionParams): string | undefined {
  if (city === null) throw new Error('city parameter cannot be null');
  if (typeof city !== 'string')
    throw new Error('city parameter must be a string');
  const memoizedCityRegion: regionWithStateType = memoizedRegions[city];
  if (memoizedCityRegion) return memoizedCityRegion.regionName;
  const foundRegion = find(
    regions,
    (region: regionType) =>
      !!find(
        region.states,
        (state: stateType) => state.cities.indexOf(city) >= 0,
      ),
  );
  if (!foundRegion) return undefined;
  const [foundState] = filter(
    foundRegion.states,
    (state) => state.cities.indexOf(city) >= 0,
  );
  const foundRegionWithCityState = { ...foundRegion, cityState: foundState };
  memoizedRegions[city] = foundRegionWithCityState;
  return foundRegionWithCityState.regionName;
}

interface GetStateCitiesParams {
  state: string;
}
/**
 * This function returns an array with the cities of the given state
 * @param {Object} stateObject - The object the tells the name of the state.
 * @param {string} stateObject.state - The state name.
 * @example
 * const cities = api.getStateCities({ state: 'São Paulo' });
 * // { state: 'São Paulo', abbreviation: 'sp', cities: ['Santos', 'São Vicente', 'Guarujá',...] }
 */
export function getStateCities({
  state = requiredParam('state'),
}: GetStateCitiesParams): string[] | undefined {
  if (state === null) throw new Error('state property cannot be null');
  if (typeof state !== 'string')
    throw new Error('state property must be a string');
  const normalizedState = removeAccents(
    state.replace(/\s|-|_/g, '').toLowerCase(),
  );
  const memoizedState: stateType = memoizedStates[normalizedState];
  if (memoizedState) return memoizedState.cities;
  const findStateInstantiated = findState(state);
  const stateFound: stateType | undefined = find(states, findStateInstantiated);
  if (stateFound) memoizedStates[normalizedState] = stateFound;
  return stateFound ? stateFound.cities : undefined;
}

const findState = (state: string) => {
  const normalizedState = removeAccents(
    state.replace(/\s|-|_/g, '').toLowerCase(),
  );
  return (element: stateType) =>
    removeAccents(element.state.replace(/\s|-|_/g, '').toLowerCase()) ===
      normalizedState || element.abbreviation === normalizedState;
};

/**
 * This function receives the city name and returns the full json stateType object
 * or only the name of the state depending on shouldReturnEntireJson property.
 * If the state is not found, it returns an empty object or an empty string.
 * @param {Object} cityObject - The object the tells the name of the city
 * @param {string} cityObject.city - The city name.
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos' });
 * // 'São Paulo'
 */
export function getCityState({
  city = requiredParam('city'),
}: {
  city: string;
}): string | undefined {
  const normalizedCity = removeAccents(
    city.replace(/\s|-|_/g, '').toLowerCase(),
  );
  const memoizedCity = memoizedCities[normalizedCity];
  if (memoizedCity) return memoizedCity.state;
  const findCity = (element: stateType): boolean =>
    element.cities.indexOf(normalizedCity) >= 0;
  const state: stateType | undefined = find(normalizedCities, findCity);
  if (!state) return undefined;
  const stateIndex = normalizedCities.indexOf(state);
  const realState = states[stateIndex];
  memoizedCities[normalizedCity] = realState;
  return realState.state;
}

/**
 * Function that memoize all the states and cities, doing it eagerly.
 * @example
 * eagerMemoization();
 * // Using it will memoize everything, making api.getCityState and api.getStateCities faster
 */
export const eagerMemoization = (): void => {
  forEach(states, (state: stateType) => {
    const normalizedStateName = removeAccents(
      state.state.replace(/\s|-|_/g, '').toLowerCase(),
    );
    memoizedStates[normalizedStateName] = state;
    forEach(state.cities, (city: string) => {
      const normalizedCityName = removeAccents(
        city.replace(/\s|-|_/g, '').toLowerCase(),
      );
      memoizedCities[normalizedCityName] = state;
    });
  });
};
