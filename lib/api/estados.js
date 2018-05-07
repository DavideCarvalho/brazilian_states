'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _removeAccents = require('remove-accents');

var _removeAccents2 = _interopRequireDefault(_removeAccents);

var _acre = require('./estados/acre');

var _acre2 = _interopRequireDefault(_acre);

var _alagoas = require('./estados/alagoas');

var _alagoas2 = _interopRequireDefault(_alagoas);

var _amazonas = require('./estados/amazonas');

var _amazonas2 = _interopRequireDefault(_amazonas);

var _amapa = require('./estados/amapa');

var _amapa2 = _interopRequireDefault(_amapa);

var _bahia = require('./estados/bahia');

var _bahia2 = _interopRequireDefault(_bahia);

var _ceara = require('./estados/ceara');

var _ceara2 = _interopRequireDefault(_ceara);

var _df = require('./estados/df');

var _df2 = _interopRequireDefault(_df);

var _espiritosanto = require('./estados/espiritosanto');

var _espiritosanto2 = _interopRequireDefault(_espiritosanto);

var _goiania = require('./estados/goiania');

var _goiania2 = _interopRequireDefault(_goiania);

var _maranhao = require('./estados/maranhao');

var _maranhao2 = _interopRequireDefault(_maranhao);

var _minasgerais = require('./estados/minasgerais');

var _minasgerais2 = _interopRequireDefault(_minasgerais);

var _matogrossodosul = require('./estados/matogrossodosul');

var _matogrossodosul2 = _interopRequireDefault(_matogrossodosul);

var _matogrosso = require('./estados/matogrosso');

var _matogrosso2 = _interopRequireDefault(_matogrosso);

var _para = require('./estados/para');

var _para2 = _interopRequireDefault(_para);

var _paraiba = require('./estados/paraiba');

var _paraiba2 = _interopRequireDefault(_paraiba);

var _piaui = require('./estados/piaui');

var _piaui2 = _interopRequireDefault(_piaui);

var _parana = require('./estados/parana');

var _parana2 = _interopRequireDefault(_parana);

var _riodejaneiro = require('./estados/riodejaneiro');

var _riodejaneiro2 = _interopRequireDefault(_riodejaneiro);

var _riograndedonorte = require('./estados/riograndedonorte');

var _riograndedonorte2 = _interopRequireDefault(_riograndedonorte);

var _rondonia = require('./estados/rondonia');

var _rondonia2 = _interopRequireDefault(_rondonia);

var _roraima = require('./estados/roraima');

var _roraima2 = _interopRequireDefault(_roraima);

var _riograndedosul = require('./estados/riograndedosul');

var _riograndedosul2 = _interopRequireDefault(_riograndedosul);

var _santacatarina = require('./estados/santacatarina');

var _santacatarina2 = _interopRequireDefault(_santacatarina);

var _sergipe = require('./estados/sergipe');

var _sergipe2 = _interopRequireDefault(_sergipe);

var _saopaulo = require('./estados/saopaulo');

var _saopaulo2 = _interopRequireDefault(_saopaulo);

var _tocantins = require('./estados/tocantins');

var _tocantins2 = _interopRequireDefault(_tocantins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = {};

const states = [_acre2.default, _alagoas2.default, _amazonas2.default, _amapa2.default, _bahia2.default, _ceara2.default, _df2.default, _espiritosanto2.default, _goiania2.default, _maranhao2.default, _minasgerais2.default, _matogrossodosul2.default, _matogrosso2.default, _para2.default, _paraiba2.default, _piaui2.default, _parana2.default, _riodejaneiro2.default, _riograndedonorte2.default, _rondonia2.default, _roraima2.default, _riograndedosul2.default, _santacatarina2.default, _sergipe2.default, _saopaulo2.default, _tocantins2.default];

const southEastStates = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
const southRegionStates = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
const northRegionStates = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
const northEastRegionStates = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
const middleEastRegionStates = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];

const southEastRegionStatesAndCities = _lodash2.default.filter(states, state => southEastStates.indexOf(state.state) !== -1);
const southRegionStatesAndCities = _lodash2.default.filter(states, state => southRegionStates.indexOf(state.state) !== -1);
const northRegionStatesAndCities = _lodash2.default.filter(states, state => northRegionStates.indexOf(state.state) !== -1);
const northEastRegionStatesAndCities = _lodash2.default.filter(states, state => northEastRegionStates.indexOf(state.state) !== -1);
const middleEastRegionStatesAndCities = _lodash2.default.filter(states, state => middleEastRegionStates.indexOf(state.state) !== -1);

const southEastRegionData = {
  regionName: 'Sudeste',
  states: southEastRegionStatesAndCities
};

const southRegionData = {
  regionName: 'Sul',
  states: southRegionStatesAndCities
};

const northRegionData = {
  regionName: 'Norte',
  states: northRegionStatesAndCities
};

const northEastRegionData = {
  regionName: 'Nordeste',
  states: northEastRegionStatesAndCities
};

const middleEastRegionData = {
  regionName: 'Centro-Oeste',
  states: middleEastRegionStatesAndCities
};

const regions = {
  norte: northRegionData,
  nordeste: northEastRegionData,
  ['centro-oeste']: middleEastRegionData,
  sudeste: southEastRegionData,
  sul: southRegionData
};

const normalizedCities = _lodash2.default.map(states, state => {
  const stateCitiesNormalized = _lodash2.default.map(state.cities, city => (0, _removeAccents2.default)(city.toLowerCase()));
  return _extends({}, state, { cities: stateCitiesNormalized });
});

const memoizedStates = {};
const memoizedCities = {};

const requiredParam = param => {
  const requiredParamError = new Error(`Required parameter, "${param}" is missing.`);
  // preserve original stack trace
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(requiredParamError, requiredParam);
  }
  throw requiredParamError;
};

api.getAllRegions = () => _lodash2.default.map(regions, region => region);

api.getRegion = ({ region = requiredParam('region') }) => {
  if (Array.isArray(region)) {
    return _lodash2.default.map(region, singleRegion => {
      const normalizedRegionName = (0, _removeAccents2.default)(singleRegion.toLowerCase());
      return regions[normalizedRegionName];
    });
  }
  const normalizedRegionName = (0, _removeAccents2.default)(region.toLowerCase());
  return regions[normalizedRegionName];
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
api.getStateCities = ({ state = requiredParam('state') }) => {
  const normalizedState = (0, _removeAccents2.default)(state.toLowerCase());
  const findState = element => (0, _removeAccents2.default)(element.state.toLowerCase()) === normalizedState || element.abbreviation === normalizedState;
  const memoizedState = memoizedStates[normalizedState];
  if (memoizedState) {
    return memoizedState;
  }
  const stateFound = _lodash2.default.find(states, findState);
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
api.getCityState = ({ city = requiredParam('city'), shouldReturnEntireJson = false }) => {
  const normalizedCity = (0, _removeAccents2.default)(city.toLowerCase());
  const memoizedCity = memoizedCities[normalizedCity];
  if (memoizedCity) {
    return shouldReturnEntireJson ? memoizedCity : memoizedCity.state;
  }
  const findCity = element => element.cities.indexOf(normalizedCity) >= 0;
  const state = _lodash2.default.find(normalizedCities, findCity);
  if (!state) {
    return shouldReturnEntireJson ? {} : '';
  }
  const stateIndex = normalizedCities.indexOf(state);
  const realState = states[stateIndex];
  memoizedCities[normalizedCity] = realState;
  return shouldReturnEntireJson ? realState : realState.state;
};

/**
  Function that memoize all the states and cities, doing it eagerly.

  @example
  api.eagerMemoization();
  // Using it will memoize everything, making api.getCityState and api.getStateCities faster
*/
api.eagerMemoization = () => {
  _lodash2.default.forEach(states, state => {
    const normalizedStateName = (0, _removeAccents2.default)(state.state.toLowerCase());
    memoizedStates[normalizedStateName] = state;
    _lodash2.default.forEach(state.cities, city => {
      const normalizedCityName = (0, _removeAccents2.default)(city.toLowerCase());
      memoizedCities[normalizedCityName] = state;
    });
  });
};

module.exports = api;
module.exports.requiredParam = requiredParam;