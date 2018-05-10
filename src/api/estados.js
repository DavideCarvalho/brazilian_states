// @flow
import map from 'lodash/map';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import filter from 'lodash/filter';
import removeAccents from 'remove-accents';
import type { stateType } from '../types/stateType';
import type { memoizedStateType } from '../types/memoizedStateType';
import type { memoizedCityType } from '../types/memoizedCityType';
import type { regionType } from '../types/regionType';
import ac from './estados/acre';
import al from './estados/alagoas';
import am from './estados/amazonas';
import ap from './estados/amapa';
import ba from './estados/bahia';
import ce from './estados/ceara';
import df from './estados/df';
import es from './estados/espiritosanto';
import go from './estados/goiania';
import ma from './estados/maranhao';
import mg from './estados/minasgerais';
import ms from './estados/matogrossodosul';
import mt from './estados/matogrosso';
import pa from './estados/para';
import pb from './estados/paraiba';
import pi from './estados/piaui';
import pr from './estados/parana';
import rj from './estados/riodejaneiro';
import rn from './estados/riograndedonorte';
import ro from './estados/rondonia';
import rr from './estados/roraima';
import rs from './estados/riograndedosul';
import sc from './estados/santacatarina';
import se from './estados/sergipe';
import sp from './estados/saopaulo';
import to from './estados/tocantins';

const api = {};

const states: Array<stateType> = [
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
];

const southEastStates: Array<string> = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
const southRegionStates: Array<string> = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
const northRegionStates: Array<string> = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
const northEastRegionStates: Array<string> = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
const middleEastRegionStates: Array<string> = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];

const southEastRegionStatesAndCities = filter(states, state => southEastStates.indexOf(state.state) !== -1);
const southRegionStatesAndCities = filter(states, state => southRegionStates.indexOf(state.state) !== -1);
const northRegionStatesAndCities = filter(states, state => northRegionStates.indexOf(state.state) !== -1);
const northEastRegionStatesAndCities = filter(states, state => northEastRegionStates.indexOf(state.state) !== -1);
const middleEastRegionStatesAndCities = filter(states, state => middleEastRegionStates.indexOf(state.state) !== -1);

const southEastRegionData = {
  regionName: 'Sudeste',
  states: southEastRegionStatesAndCities,
};

const southRegionData = {
  regionName: 'Sul',
  states: southRegionStatesAndCities,
};

const northRegionData = {
  regionName: 'Norte',
  states: northRegionStatesAndCities,
};

const northEastRegionData = {
  regionName: 'Nordeste',
  states: northEastRegionStatesAndCities,
};

const middleEastRegionData = {
  regionName: 'Centro-Oeste',
  states: middleEastRegionStatesAndCities,
};

const regions = {
  norte: northRegionData,
  nordeste: northEastRegionData,
  ['centrooeste']: middleEastRegionData,
  sudeste: southEastRegionData,
  sul: southRegionData,
};

const normalizedCities = map(states, (state) => {
  const stateCitiesNormalized = map(state.cities, city => removeAccents(city.replace(/\s|-|_/g, '').toLowerCase()));
  return { ...state, cities: stateCitiesNormalized };
});

const memoizedStates: memoizedStateType = {};
const memoizedCities: memoizedCityType = {};

const checkIfVariableIsBoolean = (variable: boolean, variableName: string): void => {
  if (variable !== true && variable !== false) {
    throw new Error(`"${variableName}" parameter should be a boolean value`);
  }
};

const requiredParam = (param: string) => {
  const requiredParamError: Error = new Error(`Required parameter, "${param}" is missing.`);
  // preserve original stack trace
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(
      requiredParamError,
      requiredParam,
    );
  }
  throw requiredParamError;
};

api.getAllRegions = ({ shouldReturnEntireJson = false }: {shouldReturnEntireJson: boolean}): Array<regionType> => {
  checkIfVariableIsBoolean(shouldReturnEntireJson, 'shouldReturnEntireJson');
  if (shouldReturnEntireJson) {
    return map(regions, region => region);
  }
  return map(regions, region => region.regionName);
};

api.getStateRegion = ({ state = requiredParam('state') }: { state: string}): regionType => find(regions, region => find(region.states, (regionState) => {
  const normalizedStateName = removeAccents(state.toLowerCase());
  return removeAccents(regionState.state.toLowerCase()) === normalizedStateName;
}));

api.getRegion = ({ region = requiredParam('region') }: { region: Array<string> }): Array<regionType> => {
  if(!Array.isArray(region)) {
    throw new Error('region parameter should be an Array')
  }
  return map(region, (singleRegion) => {
    const normalizedRegionName = removeAccents(singleRegion.replace(/\s|-|_/g, '').toLowerCase());
    return regions[normalizedRegionName];
  });
};

/**
 * This function returns an array with the cities of the given state
 * @param {Object} stateObject - The object the tells the name of the state.
 * @param {string} stateObject.state - The state name.
 *
 * @example
 * const cities = api.getStateCities({ state: 'São Paulo' });
 * // { state: 'São Paulo', abbreviation: 'sp', cities: ['Santos', 'São Vicente', 'Guarujá',...] }
 */
api.getStateCities = ({ state = requiredParam('state') }: { state: string }): ?stateType => {
  const normalizedState = removeAccents(state.replace(/\s|-|_/g, '').toLowerCase());
  const findState = element => removeAccents(element.state.replace(/\s|-|_/g, '').toLowerCase()) === normalizedState || element.abbreviation === normalizedState;
  const memoizedState: ?stateType = memoizedStates[normalizedState];
  if (memoizedState) {
    return memoizedState;
  }
  const stateFound: stateType | void = find(states, findState);
  if (stateFound) {
    memoizedStates[normalizedState] = stateFound;
  }
  return stateFound;
};

/**
 * This function receives the city name and returns the full json stateType object or only the name of the state depending on shouldReturnEntireJson property. If the state is not found, it returns an empty object or an empty string.
 * @param {Object} cityObject - The object the tells the name of the city and if the return should be an object or just a string.
 * @param {string} cityObject.city - The city name.
 * @param {boolean} cityObject.shouldReturnEntireJson - This property tells to the method that the return should ou should not be the full state object. If the property is true, it will return the entire stateType object, if its false or not set, it will return just the string with the name of the state.
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos', shouldReturnEntireJson: true });
 * // { state: 'São Paulo', abbreviation: 'sp', cities: ['Santos', 'São Vicente', 'Guarujá',...] }
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos' });
 * // 'São Paulo'
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos', shouldReturnEntireJson: false });
 * // 'São Paulo',
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity' });
 * // ''
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity' , shouldReturnEntireJson: false});
 * // ''
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity', shouldReturnEntireJson: true });
 * // {}
 */
api.getCityState = ({ city = requiredParam('city'), shouldReturnEntireJson = false }: { city: string, shouldReturnEntireJson?: boolean }): string | stateType | {} => {
  checkIfVariableIsBoolean(shouldReturnEntireJson, 'shouldReturnEntireJson');
  const normalizedCity = removeAccents(city.replace(/\s|-|_/g, '').toLowerCase());
  const memoizedCity = memoizedCities[normalizedCity];
  if (memoizedCity) {
    return shouldReturnEntireJson ? memoizedCity : memoizedCity.state;
  }
  const findCity = (element: stateType): boolean => element.cities.indexOf(normalizedCity) >= 0;
  const state: ?stateType = find(normalizedCities, findCity);
  if (!state) {
    return shouldReturnEntireJson ? {} : '';
  }
  const stateIndex = normalizedCities.indexOf(state);
  const realState = states[stateIndex];
  memoizedCities[normalizedCity] = realState;
  if (shouldReturnEntireJson) {
    return realState;
  }
  return realState.state;
};

/**
  Function that memoize all the states and cities, doing it eagerly.

  @example
  api.eagerMemoization();
  // Using it will memoize everything, making api.getCityState and api.getStateCities faster
*/
api.eagerMemoization = (): void => {
  forEach(states, (state) => {
    const normalizedStateName = removeAccents(state.state.toLowerCase());
    memoizedStates[normalizedStateName] = state;
    forEach(state.cities, (city) => {
      const normalizedCityName = removeAccents(city.toLowerCase());
      memoizedCities[normalizedCityName] = state;
    });
  });
};

module.exports = api;
module.exports.requiredParam = requiredParam;
module.exports.checkIfVariableIsBoolean = checkIfVariableIsBoolean;
