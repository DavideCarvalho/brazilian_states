// @flow
import _ from 'lodash';
import removeAccents from 'remove-accents';
import type { stateType } from '../types/stateType';
import type { memoizedStateType } from '../types/memoizedStateType';
import type { memoizedCityType } from '../types/memoizedCityType';
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

const normalizedCities = _.map(states, (state) => {
  const stateCitiesNormalized = _.map(state.cities, city => removeAccents(city.toLowerCase()));
  return { ...state, cities: stateCitiesNormalized };
});

const memoizedStates: memoizedStateType = {};
const memoizedCities: memoizedCityType = {};

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
  const normalizedState = removeAccents(state.toLowerCase());
  const findState = element => removeAccents(element.state.toLowerCase()) === normalizedState || element.abbreviation === normalizedState;
  const memoizedState: ?stateType = memoizedStates[normalizedState];
  if (memoizedState) {
    return memoizedState;
  }
  const stateFound: stateType | void = _.find(states, findState);
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
  const normalizedCity = removeAccents(city.toLowerCase());
  const memoizedCity = memoizedCities[normalizedCity];
  if (memoizedCity) {
    return shouldReturnEntireJson ? memoizedCity : memoizedCity.state;
  }
  const findCity = (element: stateType) => element.cities.indexOf(normalizedCity) >= 0;
  const state: void | stateType = _.find(normalizedCities, findCity);
  if (!state) {
    return shouldReturnEntireJson ? {} : '';
  }
  const stateIndex = normalizedCities.indexOf(state);
  const realState = states[stateIndex];
  memoizedCities[normalizedCity] = realState;
  return shouldReturnEntireJson ? realState : realState.state;
};

module.exports = api;
module.exports.requiredParam = requiredParam;
