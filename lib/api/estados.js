"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eagerMemoization = exports.getCityState = exports.getStateCities = exports.getCityRegion = exports.getStateRegion = exports.getRegion = exports.getAllRegions = exports.requiredParam = exports.checkIfVariableIsBoolean = void 0;

var _filter3 = _interopRequireDefault(require("lodash/filter"));

var _find = _interopRequireDefault(require("lodash/find"));

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var _map = _interopRequireDefault(require("lodash/map"));

var _reduce = _interopRequireDefault(require("lodash/reduce"));

var _removeAccents = _interopRequireDefault(require("remove-accents"));

var _acre = _interopRequireDefault(require("./estados/acre"));

var _alagoas = _interopRequireDefault(require("./estados/alagoas"));

var _amapa = _interopRequireDefault(require("./estados/amapa"));

var _amazonas = _interopRequireDefault(require("./estados/amazonas"));

var _bahia = _interopRequireDefault(require("./estados/bahia"));

var _ceara = _interopRequireDefault(require("./estados/ceara"));

var _df = _interopRequireDefault(require("./estados/df"));

var _espiritosanto = _interopRequireDefault(require("./estados/espiritosanto"));

var _goias = _interopRequireDefault(require("./estados/goias"));

var _maranhao = _interopRequireDefault(require("./estados/maranhao"));

var _matogrosso = _interopRequireDefault(require("./estados/matogrosso"));

var _matogrossodosul = _interopRequireDefault(require("./estados/matogrossodosul"));

var _minasgerais = _interopRequireDefault(require("./estados/minasgerais"));

var _para = _interopRequireDefault(require("./estados/para"));

var _paraiba = _interopRequireDefault(require("./estados/paraiba"));

var _parana = _interopRequireDefault(require("./estados/parana"));

var _piaui = _interopRequireDefault(require("./estados/piaui"));

var _riodejaneiro = _interopRequireDefault(require("./estados/riodejaneiro"));

var _riograndedonorte = _interopRequireDefault(require("./estados/riograndedonorte"));

var _riograndedosul = _interopRequireDefault(require("./estados/riograndedosul"));

var _rondonia = _interopRequireDefault(require("./estados/rondonia"));

var _roraima = _interopRequireDefault(require("./estados/roraima"));

var _santacatarina = _interopRequireDefault(require("./estados/santacatarina"));

var _saopaulo = _interopRequireDefault(require("./estados/saopaulo"));

var _sergipe = _interopRequireDefault(require("./estados/sergipe"));

var _tocantins = _interopRequireDefault(require("./estados/tocantins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var states = [_acre.default, _alagoas.default, _amazonas.default, _amapa.default, _bahia.default, _ceara.default, _df.default, _espiritosanto.default, _goias.default, _maranhao.default, _minasgerais.default, _matogrossodosul.default, _matogrosso.default, _para.default, _paraiba.default, _piaui.default, _parana.default, _riodejaneiro.default, _riograndedonorte.default, _rondonia.default, _roraima.default, _riograndedosul.default, _santacatarina.default, _sergipe.default, _saopaulo.default, _tocantins.default];
var southEastStates = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];
var southRegionStates = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
var northRegionStates = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondonia', 'Roraima', 'Tocantins'];
var northEastRegionStates = ['Alagoas', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
var middleEastRegionStates = ['Distrito Federal', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul'];
var southEastRegionStatesAndCities = (0, _filter3.default)(states, function (state) {
  return southEastStates.indexOf(state.state) !== -1;
});
var southRegionStatesAndCities = (0, _filter3.default)(states, function (state) {
  return southRegionStates.indexOf(state.state) !== -1;
});
var northRegionStatesAndCities = (0, _filter3.default)(states, function (state) {
  return northRegionStates.indexOf(state.state) !== -1;
});
var northEastRegionStatesAndCities = (0, _filter3.default)(states, function (state) {
  return northEastRegionStates.indexOf(state.state) !== -1;
});
var middleEastRegionStatesAndCities = (0, _filter3.default)(states, function (state) {
  return middleEastRegionStates.indexOf(state.state) !== -1;
});
var southEastRegionData = {
  regionName: 'Sudeste',
  states: southEastRegionStatesAndCities
};
var southRegionData = {
  regionName: 'Sul',
  states: southRegionStatesAndCities
};
var northRegionData = {
  regionName: 'Norte',
  states: northRegionStatesAndCities
};
var northEastRegionData = {
  regionName: 'Nordeste',
  states: northEastRegionStatesAndCities
};
var middleEastRegionData = {
  regionName: 'Centro-Oeste',
  states: middleEastRegionStatesAndCities
};
var regions = {
  centrooeste: middleEastRegionData,
  nordeste: northEastRegionData,
  norte: northRegionData,
  sudeste: southEastRegionData,
  sul: southRegionData
};
var normalizedCities = (0, _map.default)(states, function (state) {
  var stateCitiesNormalized = (0, _map.default)(state.cities, function (city) {
    return (0, _removeAccents.default)(city.replace(/\s|-|_/g, '').toLowerCase());
  });
  return _objectSpread({}, state, {
    cities: stateCitiesNormalized
  });
});
var memoizedStates = {};
var memoizedCities = {};
var memoizedRegions = {};

var checkIfVariableIsBoolean = function checkIfVariableIsBoolean(variable, variableName) {
  if (variable !== true && variable !== false) throw new Error("\"".concat(variableName, "\" parameter should be of boolean type"));
};

exports.checkIfVariableIsBoolean = checkIfVariableIsBoolean;

var requiredParam = function requiredParam(param) {
  var requiredParamError = new Error("Required parameter, \"".concat(param, "\" is missing.")); // preserve original stack trace

  if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(requiredParamError, requiredParam);
  throw requiredParamError;
};

exports.requiredParam = requiredParam;

var getAllRegions = function getAllRegions(_ref) {
  var _ref$shouldReturnEnti = _ref.shouldReturnEntireJson,
      shouldReturnEntireJson = _ref$shouldReturnEnti === void 0 ? false : _ref$shouldReturnEnti;
  if (shouldReturnEntireJson === null) throw new Error('shouldReturnEntireJson property cannot be null');
  checkIfVariableIsBoolean(shouldReturnEntireJson, 'shouldReturnEntireJson');
  if (shouldReturnEntireJson) return (0, _map.default)(regions, function (region) {
    return region;
  });
  return (0, _map.default)(regions, function (region) {
    return region.regionName;
  });
};

exports.getAllRegions = getAllRegions;

var getRegion = function getRegion(_ref2) {
  var _ref2$region = _ref2.region,
      region = _ref2$region === void 0 ? requiredParam('region') : _ref2$region;
  if (!region) throw new Error('region parameter cannot be null or undefined');
  if (!Array.isArray(region)) throw new Error('region parameter should be an Array');
  return (0, _map.default)(region, function (singleRegion) {
    var normalizedRegionName = (0, _removeAccents.default)(singleRegion.replace(/\s|-|_/g, '').toLowerCase());
    return regions[normalizedRegionName];
  });
};

exports.getRegion = getRegion;

var getStateRegion = function getStateRegion(_ref3) {
  var _ref3$state = _ref3.state,
      state = _ref3$state === void 0 ? requiredParam('state') : _ref3$state,
      _ref3$shouldReturnEnt = _ref3.shouldReturnEntireJson,
      shouldReturnEntireJson = _ref3$shouldReturnEnt === void 0 ? false : _ref3$shouldReturnEnt;
  if (!state) throw new Error('state property cannot be null or undefined');
  if (typeof state !== 'string') throw new Error('variable state should be a string');
  var normalizedStateName = (0, _removeAccents.default)(state.replace(/\s|-|_/g, '').toLowerCase());
  var memoizedStateRegion = memoizedRegions[normalizedStateName];

  if (!memoizedStateRegion) {
    var foundRegion = (0, _reduce.default)(regions, function (acc, region) {
      var filteredRegion = region.states.filter(function (regionState) {
        return (0, _removeAccents.default)(regionState.state.replace(/\s|-|_/g, '').toLowerCase()) === normalizedStateName;
      });
      if (filteredRegion.length > 0) return region;
      return acc;
    }, null);
    if (!foundRegion) return null;
    memoizedRegions[state] = foundRegion;
    return shouldReturnEntireJson ? foundRegion : foundRegion.regionName;
  }

  return shouldReturnEntireJson ? memoizedStateRegion : memoizedStateRegion.regionName;
};

exports.getStateRegion = getStateRegion;

var getCityRegion = function getCityRegion(_ref4) {
  var _ref4$city = _ref4.city,
      city = _ref4$city === void 0 ? requiredParam('city') : _ref4$city,
      _ref4$shouldReturnEnt = _ref4.shouldReturnEntireJson,
      shouldReturnEntireJson = _ref4$shouldReturnEnt === void 0 ? false : _ref4$shouldReturnEnt;
  if (typeof city !== 'string') throw new Error('city parameter must be a string');
  if (typeof shouldReturnEntireJson !== 'boolean') throw new Error('shouldReturnEntireJson parameter must be a string');
  var memoizedCityRegion = memoizedRegions[city];

  if (!memoizedCityRegion) {
    var foundRegion = (0, _find.default)(regions, function (region) {
      return !!(0, _find.default)(region.states, function (state) {
        return state.cities.indexOf(city) >= 0;
      });
    });
    if (!foundRegion) return null;

    var _filter = (0, _filter3.default)(foundRegion.states, function (state) {
      return state.cities.indexOf(city) >= 0;
    }),
        _filter2 = _slicedToArray(_filter, 1),
        foundState = _filter2[0];

    var foundRegionWithCityState = _objectSpread({}, foundRegion, {
      cityState: foundState
    });

    memoizedRegions[city] = foundRegionWithCityState;
    if (shouldReturnEntireJson) return foundRegionWithCityState;
    return foundRegionWithCityState.regionName;
  }

  if (shouldReturnEntireJson) return memoizedCityRegion;
  return memoizedCityRegion.regionName;
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


exports.getCityRegion = getCityRegion;

var getStateCities = function getStateCities(_ref5) {
  var _ref5$state = _ref5.state,
      state = _ref5$state === void 0 ? requiredParam('state') : _ref5$state;
  if (!state) throw new Error('state property cannot be null or undefined');
  if (typeof state !== 'string') throw new Error('state property must be a string');
  var normalizedState = (0, _removeAccents.default)(state.replace(/\s|-|_/g, '').toLowerCase());
  var memoizedState = memoizedStates[normalizedState];
  if (memoizedState) return memoizedState;
  var findStateInstantiated = findState(state);
  var stateFound = (0, _find.default)(states, findStateInstantiated);
  if (!stateFound) return null;
  if (stateFound) memoizedStates[normalizedState] = stateFound;
  return stateFound;
};

exports.getStateCities = getStateCities;

var findState = function findState(state) {
  var normalizedState = (0, _removeAccents.default)(state.replace(/\s|-|_/g, '').toLowerCase());
  return function (element) {
    return (0, _removeAccents.default)(element.state.replace(/\s|-|_/g, '').toLowerCase()) === normalizedState || element.abbreviation === normalizedState;
  };
};
/**
 * This function receives the city name and returns the full json stateType object
 * or only the name of the state depending on shouldReturnEntireJson property.
 * If the state is not found, it returns an empty object or an empty string.
 * @param {Object} cityObject - The object the tells the name of the city and if the return
 * should be an object or just a string.
 * @param {string} cityObject.city - The city name.
 * @param {boolean} cityObject.shouldReturnEntireJson - This property tells to the method
 * that the return should ou should not be the full state object.
 * If the property is true, it will return the entire stateType object,
 * if its false or not set, it will return just the string with the name of the state.
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
 * // null
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity' , shouldReturnEntireJson: false});
 * // null
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity', shouldReturnEntireJson: true });
 * // null
 */


var getCityState = function getCityState(_ref6) {
  var _ref6$city = _ref6.city,
      city = _ref6$city === void 0 ? requiredParam('city') : _ref6$city,
      _ref6$shouldReturnEnt = _ref6.shouldReturnEntireJson,
      shouldReturnEntireJson = _ref6$shouldReturnEnt === void 0 ? false : _ref6$shouldReturnEnt;
  checkIfVariableIsBoolean(shouldReturnEntireJson, 'shouldReturnEntireJson');
  var normalizedCity = (0, _removeAccents.default)(city.replace(/\s|-|_/g, '').toLowerCase());
  var memoizedCity = memoizedCities[normalizedCity];
  if (memoizedCity) return shouldReturnEntireJson ? memoizedCity : memoizedCity.state;

  var findCity = function findCity(element) {
    return element.cities.indexOf(normalizedCity) >= 0;
  };

  var state = (0, _find.default)(normalizedCities, findCity);
  if (!state) return null;
  var stateIndex = normalizedCities.indexOf(state);
  var realState = states[stateIndex];
  memoizedCities[normalizedCity] = realState;
  if (shouldReturnEntireJson) return realState;
  return realState.state;
};
/**
 * Function that memoize all the states and cities, doing it eagerly.
 * @example
 * eagerMemoization();
 * // Using it will memoize everything, making api.getCityState and api.getStateCities faster
 */


exports.getCityState = getCityState;

var eagerMemoization = function eagerMemoization() {
  (0, _forEach.default)(states, function (state) {
    var normalizedStateName = (0, _removeAccents.default)(state.state.replace(/\s|-|_/g, '').toLowerCase());
    memoizedStates[normalizedStateName] = state;
    (0, _forEach.default)(state.cities, function (city) {
      var normalizedCityName = (0, _removeAccents.default)(city.replace(/\s|-|_/g, '').toLowerCase());
      memoizedCities[normalizedCityName] = state;
    });
  });
};

exports.eagerMemoization = eagerMemoization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvZXN0YWRvcy50cyJdLCJuYW1lcyI6WyJzdGF0ZXMiLCJhYyIsImFsIiwiYW0iLCJhcCIsImJhIiwiY2UiLCJkZiIsImVzIiwiZ28iLCJtYSIsIm1nIiwibXMiLCJtdCIsInBhIiwicGIiLCJwaSIsInByIiwicmoiLCJybiIsInJvIiwicnIiLCJycyIsInNjIiwic2UiLCJzcCIsInRvIiwic291dGhFYXN0U3RhdGVzIiwic291dGhSZWdpb25TdGF0ZXMiLCJub3J0aFJlZ2lvblN0YXRlcyIsIm5vcnRoRWFzdFJlZ2lvblN0YXRlcyIsIm1pZGRsZUVhc3RSZWdpb25TdGF0ZXMiLCJzb3V0aEVhc3RSZWdpb25TdGF0ZXNBbmRDaXRpZXMiLCJzdGF0ZSIsImluZGV4T2YiLCJzb3V0aFJlZ2lvblN0YXRlc0FuZENpdGllcyIsIm5vcnRoUmVnaW9uU3RhdGVzQW5kQ2l0aWVzIiwibm9ydGhFYXN0UmVnaW9uU3RhdGVzQW5kQ2l0aWVzIiwibWlkZGxlRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyIsInNvdXRoRWFzdFJlZ2lvbkRhdGEiLCJyZWdpb25OYW1lIiwic291dGhSZWdpb25EYXRhIiwibm9ydGhSZWdpb25EYXRhIiwibm9ydGhFYXN0UmVnaW9uRGF0YSIsIm1pZGRsZUVhc3RSZWdpb25EYXRhIiwicmVnaW9ucyIsImNlbnRyb29lc3RlIiwibm9yZGVzdGUiLCJub3J0ZSIsInN1ZGVzdGUiLCJzdWwiLCJub3JtYWxpemVkQ2l0aWVzIiwic3RhdGVDaXRpZXNOb3JtYWxpemVkIiwiY2l0aWVzIiwiY2l0eSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIm1lbW9pemVkU3RhdGVzIiwibWVtb2l6ZWRDaXRpZXMiLCJtZW1vaXplZFJlZ2lvbnMiLCJjaGVja0lmVmFyaWFibGVJc0Jvb2xlYW4iLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsIkVycm9yIiwicmVxdWlyZWRQYXJhbSIsInBhcmFtIiwicmVxdWlyZWRQYXJhbUVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJnZXRBbGxSZWdpb25zIiwic2hvdWxkUmV0dXJuRW50aXJlSnNvbiIsInJlZ2lvbiIsImdldFJlZ2lvbiIsIkFycmF5IiwiaXNBcnJheSIsInNpbmdsZVJlZ2lvbiIsIm5vcm1hbGl6ZWRSZWdpb25OYW1lIiwiZ2V0U3RhdGVSZWdpb24iLCJub3JtYWxpemVkU3RhdGVOYW1lIiwibWVtb2l6ZWRTdGF0ZVJlZ2lvbiIsImZvdW5kUmVnaW9uIiwiYWNjIiwiZmlsdGVyZWRSZWdpb24iLCJmaWx0ZXIiLCJyZWdpb25TdGF0ZSIsImxlbmd0aCIsImdldENpdHlSZWdpb24iLCJtZW1vaXplZENpdHlSZWdpb24iLCJmb3VuZFN0YXRlIiwiZm91bmRSZWdpb25XaXRoQ2l0eVN0YXRlIiwiY2l0eVN0YXRlIiwiZ2V0U3RhdGVDaXRpZXMiLCJub3JtYWxpemVkU3RhdGUiLCJtZW1vaXplZFN0YXRlIiwiZmluZFN0YXRlSW5zdGFudGlhdGVkIiwiZmluZFN0YXRlIiwic3RhdGVGb3VuZCIsImVsZW1lbnQiLCJhYmJyZXZpYXRpb24iLCJnZXRDaXR5U3RhdGUiLCJub3JtYWxpemVkQ2l0eSIsIm1lbW9pemVkQ2l0eSIsImZpbmRDaXR5Iiwic3RhdGVJbmRleCIsInJlYWxTdGF0ZSIsImVhZ2VyTWVtb2l6YXRpb24iLCJub3JtYWxpemVkQ2l0eU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQW1CLEdBQUcsQ0FDMUJDLGFBRDBCLEVBRTFCQyxnQkFGMEIsRUFHMUJDLGlCQUgwQixFQUkxQkMsY0FKMEIsRUFLMUJDLGNBTDBCLEVBTTFCQyxjQU4wQixFQU8xQkMsV0FQMEIsRUFRMUJDLHNCQVIwQixFQVMxQkMsY0FUMEIsRUFVMUJDLGlCQVYwQixFQVcxQkMsb0JBWDBCLEVBWTFCQyx3QkFaMEIsRUFhMUJDLG1CQWIwQixFQWMxQkMsYUFkMEIsRUFlMUJDLGdCQWYwQixFQWdCMUJDLGNBaEIwQixFQWlCMUJDLGVBakIwQixFQWtCMUJDLHFCQWxCMEIsRUFtQjFCQyx5QkFuQjBCLEVBb0IxQkMsaUJBcEIwQixFQXFCMUJDLGdCQXJCMEIsRUFzQjFCQyx1QkF0QjBCLEVBdUIxQkMsc0JBdkIwQixFQXdCMUJDLGdCQXhCMEIsRUF5QjFCQyxpQkF6QjBCLEVBMEIxQkMsa0JBMUIwQixDQUE1QjtBQTZCQSxJQUFNQyxlQUF5QixHQUFHLENBQ2hDLFdBRGdDLEVBRWhDLGdCQUZnQyxFQUdoQyxnQkFIZ0MsRUFJaEMsY0FKZ0MsQ0FBbEM7QUFNQSxJQUFNQyxpQkFBMkIsR0FBRyxDQUNsQyxRQURrQyxFQUVsQyxtQkFGa0MsRUFHbEMsZ0JBSGtDLENBQXBDO0FBS0EsSUFBTUMsaUJBQTJCLEdBQUcsQ0FDbEMsTUFEa0MsRUFFbEMsT0FGa0MsRUFHbEMsVUFIa0MsRUFJbEMsTUFKa0MsRUFLbEMsVUFMa0MsRUFNbEMsU0FOa0MsRUFPbEMsV0FQa0MsQ0FBcEM7QUFTQSxJQUFNQyxxQkFBK0IsR0FBRyxDQUN0QyxTQURzQyxFQUV0QyxPQUZzQyxFQUd0QyxVQUhzQyxFQUl0QyxTQUpzQyxFQUt0QyxZQUxzQyxFQU10QyxPQU5zQyxFQU90QyxxQkFQc0MsRUFRdEMsU0FSc0MsQ0FBeEM7QUFVQSxJQUFNQyxzQkFBZ0MsR0FBRyxDQUN2QyxrQkFEdUMsRUFFdkMsT0FGdUMsRUFHdkMsYUFIdUMsRUFJdkMsb0JBSnVDLENBQXpDO0FBT0EsSUFBTUMsOEJBQThCLEdBQ2xDLHNCQUFPaEMsTUFBUCxFQUFlLFVBQUFpQyxLQUFLO0FBQUEsU0FBSU4sZUFBZSxDQUFDTyxPQUFoQixDQUF3QkQsS0FBSyxDQUFDQSxLQUE5QixNQUF5QyxDQUFDLENBQTlDO0FBQUEsQ0FBcEIsQ0FERjtBQUVBLElBQU1FLDBCQUEwQixHQUM5QixzQkFBT25DLE1BQVAsRUFBZSxVQUFBaUMsS0FBSztBQUFBLFNBQUlMLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQkQsS0FBSyxDQUFDQSxLQUFoQyxNQUEyQyxDQUFDLENBQWhEO0FBQUEsQ0FBcEIsQ0FERjtBQUVBLElBQU1HLDBCQUEwQixHQUM5QixzQkFBT3BDLE1BQVAsRUFBZSxVQUFBaUMsS0FBSztBQUFBLFNBQUlKLGlCQUFpQixDQUFDSyxPQUFsQixDQUEwQkQsS0FBSyxDQUFDQSxLQUFoQyxNQUEyQyxDQUFDLENBQWhEO0FBQUEsQ0FBcEIsQ0FERjtBQUVBLElBQU1JLDhCQUE4QixHQUNsQyxzQkFBT3JDLE1BQVAsRUFBZSxVQUFBaUMsS0FBSztBQUFBLFNBQUlILHFCQUFxQixDQUFDSSxPQUF0QixDQUE4QkQsS0FBSyxDQUFDQSxLQUFwQyxNQUErQyxDQUFDLENBQXBEO0FBQUEsQ0FBcEIsQ0FERjtBQUVBLElBQU1LLCtCQUErQixHQUNuQyxzQkFBT3RDLE1BQVAsRUFBZSxVQUFBaUMsS0FBSztBQUFBLFNBQUlGLHNCQUFzQixDQUFDRyxPQUF2QixDQUErQkQsS0FBSyxDQUFDQSxLQUFyQyxNQUFnRCxDQUFDLENBQXJEO0FBQUEsQ0FBcEIsQ0FERjtBQUdBLElBQU1NLG1CQUErQixHQUFHO0FBQ3RDQyxFQUFBQSxVQUFVLEVBQUUsU0FEMEI7QUFFdEN4QyxFQUFBQSxNQUFNLEVBQUVnQztBQUY4QixDQUF4QztBQUtBLElBQU1TLGVBQTJCLEdBQUc7QUFDbENELEVBQUFBLFVBQVUsRUFBRSxLQURzQjtBQUVsQ3hDLEVBQUFBLE1BQU0sRUFBRW1DO0FBRjBCLENBQXBDO0FBS0EsSUFBTU8sZUFBMkIsR0FBRztBQUNsQ0YsRUFBQUEsVUFBVSxFQUFFLE9BRHNCO0FBRWxDeEMsRUFBQUEsTUFBTSxFQUFFb0M7QUFGMEIsQ0FBcEM7QUFLQSxJQUFNTyxtQkFBK0IsR0FBRztBQUN0Q0gsRUFBQUEsVUFBVSxFQUFFLFVBRDBCO0FBRXRDeEMsRUFBQUEsTUFBTSxFQUFFcUM7QUFGOEIsQ0FBeEM7QUFLQSxJQUFNTyxvQkFBZ0MsR0FBRztBQUN2Q0osRUFBQUEsVUFBVSxFQUFFLGNBRDJCO0FBRXZDeEMsRUFBQUEsTUFBTSxFQUFFc0M7QUFGK0IsQ0FBekM7QUFTQSxJQUFNTyxPQUFvQixHQUFHO0FBQzNCQyxFQUFBQSxXQUFXLEVBQUVGLG9CQURjO0FBRTNCRyxFQUFBQSxRQUFRLEVBQUVKLG1CQUZpQjtBQUczQkssRUFBQUEsS0FBSyxFQUFFTixlQUhvQjtBQUkzQk8sRUFBQUEsT0FBTyxFQUFFVixtQkFKa0I7QUFLM0JXLEVBQUFBLEdBQUcsRUFBRVQ7QUFMc0IsQ0FBN0I7QUFRQSxJQUFNVSxnQkFBZ0IsR0FBRyxrQkFBSW5ELE1BQUosRUFBWSxVQUFDaUMsS0FBRCxFQUFzQjtBQUN6RCxNQUFNbUIscUJBQXFCLEdBQUcsa0JBQUluQixLQUFLLENBQUNvQixNQUFWLEVBQWtCLFVBQUFDLElBQUk7QUFBQSxXQUFJLDRCQUFjQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLEVBQXhCLEVBQTRCQyxXQUE1QixFQUFkLENBQUo7QUFBQSxHQUF0QixDQUE5QjtBQUNBLDJCQUFZdkIsS0FBWjtBQUFtQm9CLElBQUFBLE1BQU0sRUFBRUQ7QUFBM0I7QUFDRCxDQUh3QixDQUF6QjtBQUtBLElBQU1LLGNBQWlDLEdBQUcsRUFBMUM7QUFDQSxJQUFNQyxjQUFnQyxHQUFHLEVBQXpDO0FBQ0EsSUFBTUMsZUFBNEMsR0FBRyxFQUFyRDs7QUFFTyxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLFFBQUQsRUFBb0JDLFlBQXBCLEVBQW1EO0FBQ3pGLE1BQUlELFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBdEMsRUFDRSxNQUFNLElBQUlFLEtBQUosYUFBY0QsWUFBZCw0Q0FBTjtBQUNILENBSE07Ozs7QUFLQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBbUI7QUFDOUMsTUFBTUMsa0JBQXlCLEdBQUcsSUFBSUgsS0FBSixpQ0FBa0NFLEtBQWxDLG9CQUFsQyxDQUQ4QyxDQUU5Qzs7QUFDQSxNQUFJLE9BQU9GLEtBQUssQ0FBQ0ksaUJBQWIsS0FBbUMsVUFBdkMsRUFDRUosS0FBSyxDQUFDSSxpQkFBTixDQUNFRCxrQkFERixFQUVFRixhQUZGO0FBSUYsUUFBTUUsa0JBQU47QUFDRCxDQVRNOzs7O0FBV0EsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUlJO0FBQUEsbUNBSDdCQyxzQkFHNkI7QUFBQSxNQUg3QkEsc0JBRzZCLHNDQUhKLEtBR0k7QUFDL0IsTUFBSUEsc0JBQXNCLEtBQUssSUFBL0IsRUFBcUMsTUFBTSxJQUFJTixLQUFKLENBQVUsZ0RBQVYsQ0FBTjtBQUNyQ0gsRUFBQUEsd0JBQXdCLENBQUNTLHNCQUFELEVBQXlCLHdCQUF6QixDQUF4QjtBQUNBLE1BQUlBLHNCQUFKLEVBQTRCLE9BQU8sa0JBQUl4QixPQUFKLEVBQWEsVUFBQXlCLE1BQU07QUFBQSxXQUFJQSxNQUFKO0FBQUEsR0FBbkIsQ0FBUDtBQUM1QixTQUFPLGtCQUFJekIsT0FBSixFQUFhLFVBQUF5QixNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDOUIsVUFBWDtBQUFBLEdBQW5CLENBQVA7QUFDRCxDQVRNOzs7O0FBV0EsSUFBTStCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQThFO0FBQUEsMkJBQTNFRCxNQUEyRTtBQUFBLE1BQTNFQSxNQUEyRSw2QkFBbEVOLGFBQWEsQ0FBQyxRQUFELENBQXFEO0FBQ3JHLE1BQUksQ0FBQ00sTUFBTCxFQUFhLE1BQU0sSUFBSVAsS0FBSixDQUFVLDhDQUFWLENBQU47QUFDYixNQUFJLENBQUNTLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxNQUFkLENBQUwsRUFBNEIsTUFBTSxJQUFJUCxLQUFKLENBQVUscUNBQVYsQ0FBTjtBQUM1QixTQUFPLGtCQUFJTyxNQUFKLEVBQVksVUFBQUksWUFBWSxFQUFJO0FBQ2pDLFFBQU1DLG9CQUFvQixHQUFHLDRCQUFjRCxZQUFZLENBQUNuQixPQUFiLENBQXFCLFNBQXJCLEVBQWdDLEVBQWhDLEVBQW9DQyxXQUFwQyxFQUFkLENBQTdCO0FBQ0EsV0FBT1gsT0FBTyxDQUFDOEIsb0JBQUQsQ0FBZDtBQUNELEdBSE0sQ0FBUDtBQUlELENBUE07Ozs7QUFTQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLFFBQXlKO0FBQUEsMEJBQXRKM0MsS0FBc0o7QUFBQSxNQUF0SkEsS0FBc0osNEJBQTlJK0IsYUFBYSxDQUFDLE9BQUQsQ0FBaUk7QUFBQSxvQ0FBdEhLLHNCQUFzSDtBQUFBLE1BQXRIQSxzQkFBc0gsc0NBQTdGLEtBQTZGO0FBQ3JMLE1BQUksQ0FBQ3BDLEtBQUwsRUFBWSxNQUFNLElBQUk4QixLQUFKLENBQVUsNENBQVYsQ0FBTjtBQUNaLE1BQUksT0FBTzlCLEtBQVAsS0FBaUIsUUFBckIsRUFBK0IsTUFBTSxJQUFJOEIsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDL0IsTUFBTWMsbUJBQW1CLEdBQUcsNEJBQWM1QyxLQUFLLENBQUNzQixPQUFOLENBQWMsU0FBZCxFQUF5QixFQUF6QixFQUE2QkMsV0FBN0IsRUFBZCxDQUE1QjtBQUNBLE1BQU1zQixtQkFBbUIsR0FBR25CLGVBQWUsQ0FBQ2tCLG1CQUFELENBQTNDOztBQUNBLE1BQUksQ0FBQ0MsbUJBQUwsRUFBMEI7QUFDeEIsUUFBTUMsV0FBOEIsR0FBRyxxQkFBT2xDLE9BQVAsRUFBZ0IsVUFBQ21DLEdBQUQsRUFBa0JWLE1BQWxCLEVBQXlDO0FBQzlGLFVBQU1XLGNBQTJCLEdBQUdYLE1BQU0sQ0FBQ3RFLE1BQVAsQ0FBY2tGLE1BQWQsQ0FBcUIsVUFBQUMsV0FBVyxFQUFJO0FBQ3RFLGVBQU8sNEJBQWNBLFdBQVcsQ0FBQ2xELEtBQVosQ0FBa0JzQixPQUFsQixDQUEwQixTQUExQixFQUFxQyxFQUFyQyxFQUF5Q0MsV0FBekMsRUFBZCxNQUEwRXFCLG1CQUFqRjtBQUNELE9BRm1DLENBQXBDO0FBR0EsVUFBSUksY0FBYyxDQUFDRyxNQUFmLEdBQXdCLENBQTVCLEVBQStCLE9BQU9kLE1BQVA7QUFDL0IsYUFBT1UsR0FBUDtBQUNELEtBTnNDLEVBTXBDLElBTm9DLENBQXZDO0FBT0EsUUFBSSxDQUFDRCxXQUFMLEVBQWtCLE9BQU8sSUFBUDtBQUNsQnBCLElBQUFBLGVBQWUsQ0FBQzFCLEtBQUQsQ0FBZixHQUF5QjhDLFdBQXpCO0FBQ0EsV0FBT1Ysc0JBQXNCLEdBQUdVLFdBQUgsR0FBaUJBLFdBQVcsQ0FBQ3ZDLFVBQTFEO0FBQ0Q7O0FBQ0QsU0FBTzZCLHNCQUFzQixHQUFHUyxtQkFBSCxHQUF5QkEsbUJBQW1CLENBQUN0QyxVQUExRTtBQUNELENBbEJNOzs7O0FBb0JBLElBQU02QyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLFFBTWdCO0FBQUEseUJBTDNDL0IsSUFLMkM7QUFBQSxNQUwzQ0EsSUFLMkMsMkJBTHBDVSxhQUFhLENBQUMsTUFBRCxDQUt1QjtBQUFBLG9DQUozQ0ssc0JBSTJDO0FBQUEsTUFKM0NBLHNCQUkyQyxzQ0FKbEIsS0FJa0I7QUFDM0MsTUFBSSxPQUFPZixJQUFQLEtBQWdCLFFBQXBCLEVBQThCLE1BQU0sSUFBSVMsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDOUIsTUFBSSxPQUFPTSxzQkFBUCxLQUFrQyxTQUF0QyxFQUFpRCxNQUFNLElBQUlOLEtBQUosQ0FBVSxtREFBVixDQUFOO0FBQ2pELE1BQU11QixrQkFBdUMsR0FBRzNCLGVBQWUsQ0FBQ0wsSUFBRCxDQUEvRDs7QUFDQSxNQUFJLENBQUNnQyxrQkFBTCxFQUF5QjtBQUN2QixRQUFNUCxXQUFXLEdBQUcsbUJBQUtsQyxPQUFMLEVBQWMsVUFBQ3lCLE1BQUQ7QUFBQSxhQUM5QixDQUFDLENBQUMsbUJBQU1BLE1BQU0sQ0FBQ3RFLE1BQWIsRUFBc0IsVUFBQ2lDLEtBQUQ7QUFBQSxlQUFzQkEsS0FBSyxDQUFDb0IsTUFBTixDQUFhbkIsT0FBYixDQUFxQm9CLElBQXJCLEtBQThCLENBQXBEO0FBQUEsT0FBdEIsQ0FENEI7QUFBQSxLQUFkLENBQXBCO0FBRUEsUUFBSSxDQUFDeUIsV0FBTCxFQUFrQixPQUFPLElBQVA7O0FBSEssa0JBSUYsc0JBQU9BLFdBQVcsQ0FBQy9FLE1BQW5CLEVBQTJCLFVBQUFpQyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDb0IsTUFBTixDQUFhbkIsT0FBYixDQUFxQm9CLElBQXJCLEtBQThCLENBQWxDO0FBQUEsS0FBaEMsQ0FKRTtBQUFBO0FBQUEsUUFJaEJpQyxVQUpnQjs7QUFLdkIsUUFBTUMsd0JBQXdCLHFCQUFRVCxXQUFSO0FBQXFCVSxNQUFBQSxTQUFTLEVBQUVGO0FBQWhDLE1BQTlCOztBQUNBNUIsSUFBQUEsZUFBZSxDQUFDTCxJQUFELENBQWYsR0FBd0JrQyx3QkFBeEI7QUFDQSxRQUFJbkIsc0JBQUosRUFBNEIsT0FBT21CLHdCQUFQO0FBQzVCLFdBQU9BLHdCQUF3QixDQUFDaEQsVUFBaEM7QUFDRDs7QUFDRCxNQUFJNkIsc0JBQUosRUFBMkIsT0FBT2lCLGtCQUFQO0FBQzNCLFNBQU9BLGtCQUFrQixDQUFDOUMsVUFBMUI7QUFDRCxDQXRCTTtBQXdCUDs7Ozs7Ozs7Ozs7OztBQVNPLElBQU1rRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLFFBQTZFO0FBQUEsMEJBQTFFekQsS0FBMEU7QUFBQSxNQUExRUEsS0FBMEUsNEJBQWxFK0IsYUFBYSxDQUFDLE9BQUQsQ0FBcUQ7QUFDekcsTUFBSSxDQUFDL0IsS0FBTCxFQUFZLE1BQU0sSUFBSThCLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ1osTUFBSSxPQUFPOUIsS0FBUCxLQUFpQixRQUFyQixFQUErQixNQUFNLElBQUk4QixLQUFKLENBQVcsaUNBQVgsQ0FBTjtBQUMvQixNQUFNNEIsZUFBZSxHQUFHLDRCQUFjMUQsS0FBSyxDQUFDc0IsT0FBTixDQUFjLFNBQWQsRUFBeUIsRUFBekIsRUFBNkJDLFdBQTdCLEVBQWQsQ0FBeEI7QUFDQSxNQUFNb0MsYUFBd0IsR0FBR25DLGNBQWMsQ0FBQ2tDLGVBQUQsQ0FBL0M7QUFDQSxNQUFJQyxhQUFKLEVBQW1CLE9BQU9BLGFBQVA7QUFDbkIsTUFBTUMscUJBQXFCLEdBQUdDLFNBQVMsQ0FBQzdELEtBQUQsQ0FBdkM7QUFDQSxNQUFNOEQsVUFBaUMsR0FBRyxtQkFBSy9GLE1BQUwsRUFBYTZGLHFCQUFiLENBQTFDO0FBQ0EsTUFBSSxDQUFDRSxVQUFMLEVBQWlCLE9BQU8sSUFBUDtBQUNqQixNQUFJQSxVQUFKLEVBQWdCdEMsY0FBYyxDQUFDa0MsZUFBRCxDQUFkLEdBQWtDSSxVQUFsQztBQUNoQixTQUFPQSxVQUFQO0FBQ0QsQ0FYTTs7OztBQWFQLElBQU1ELFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUM3RCxLQUFELEVBQW1CO0FBQ25DLE1BQU0wRCxlQUFlLEdBQUcsNEJBQWMxRCxLQUFLLENBQUNzQixPQUFOLENBQWMsU0FBZCxFQUF5QixFQUF6QixFQUE2QkMsV0FBN0IsRUFBZCxDQUF4QjtBQUNBLFNBQU8sVUFBQ3dDLE9BQUQ7QUFBQSxXQUF3Qiw0QkFBY0EsT0FBTyxDQUFDL0QsS0FBUixDQUFjc0IsT0FBZCxDQUFzQixTQUF0QixFQUFpQyxFQUFqQyxFQUFxQ0MsV0FBckMsRUFBZCxNQUFzRW1DLGVBQXRFLElBQ3hCSyxPQUFPLENBQUNDLFlBQVIsS0FBeUJOLGVBRHpCO0FBQUEsR0FBUDtBQUVELENBSkQ7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ08sSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFNSztBQUFBLHlCQUwvQjVDLElBSytCO0FBQUEsTUFML0JBLElBSytCLDJCQUx4QlUsYUFBYSxDQUFDLE1BQUQsQ0FLVztBQUFBLG9DQUovQkssc0JBSStCO0FBQUEsTUFKL0JBLHNCQUkrQixzQ0FKTixLQUlNO0FBQy9CVCxFQUFBQSx3QkFBd0IsQ0FBQ1Msc0JBQUQsRUFBeUIsd0JBQXpCLENBQXhCO0FBQ0EsTUFBTThCLGNBQWMsR0FBRyw0QkFBYzdDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLFNBQWIsRUFBd0IsRUFBeEIsRUFBNEJDLFdBQTVCLEVBQWQsQ0FBdkI7QUFDQSxNQUFNNEMsWUFBWSxHQUFHMUMsY0FBYyxDQUFDeUMsY0FBRCxDQUFuQztBQUNBLE1BQUlDLFlBQUosRUFBa0IsT0FBTy9CLHNCQUFzQixHQUFHK0IsWUFBSCxHQUFrQkEsWUFBWSxDQUFDbkUsS0FBNUQ7O0FBQ2xCLE1BQU1vRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTCxPQUFEO0FBQUEsV0FBaUNBLE9BQU8sQ0FBQzNDLE1BQVIsQ0FBZW5CLE9BQWYsQ0FBdUJpRSxjQUF2QixLQUEwQyxDQUEzRTtBQUFBLEdBQWpCOztBQUNBLE1BQU1sRSxLQUE0QixHQUFHLG1CQUFLa0IsZ0JBQUwsRUFBdUJrRCxRQUF2QixDQUFyQztBQUNBLE1BQUksQ0FBQ3BFLEtBQUwsRUFBWSxPQUFPLElBQVA7QUFDWixNQUFNcUUsVUFBVSxHQUFHbkQsZ0JBQWdCLENBQUNqQixPQUFqQixDQUF5QkQsS0FBekIsQ0FBbkI7QUFDQSxNQUFNc0UsU0FBUyxHQUFHdkcsTUFBTSxDQUFDc0csVUFBRCxDQUF4QjtBQUNBNUMsRUFBQUEsY0FBYyxDQUFDeUMsY0FBRCxDQUFkLEdBQWlDSSxTQUFqQztBQUNBLE1BQUlsQyxzQkFBSixFQUE0QixPQUFPa0MsU0FBUDtBQUM1QixTQUFPQSxTQUFTLENBQUN0RSxLQUFqQjtBQUNELENBbkJNO0FBcUJQOzs7Ozs7Ozs7O0FBTU8sSUFBTXVFLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBWTtBQUMxQyx3QkFBUXhHLE1BQVIsRUFBZ0IsVUFBQ2lDLEtBQUQsRUFBc0I7QUFDcEMsUUFBTTRDLG1CQUFtQixHQUFHLDRCQUFjNUMsS0FBSyxDQUFDQSxLQUFOLENBQVlzQixPQUFaLENBQW9CLFNBQXBCLEVBQStCLEVBQS9CLEVBQW1DQyxXQUFuQyxFQUFkLENBQTVCO0FBQ0FDLElBQUFBLGNBQWMsQ0FBQ29CLG1CQUFELENBQWQsR0FBc0M1QyxLQUF0QztBQUNBLDBCQUFRQSxLQUFLLENBQUNvQixNQUFkLEVBQXNCLFVBQUNDLElBQUQsRUFBa0I7QUFDdEMsVUFBTW1ELGtCQUFrQixHQUFHLDRCQUFjbkQsSUFBSSxDQUFDQyxPQUFMLENBQWEsU0FBYixFQUF3QixFQUF4QixFQUE0QkMsV0FBNUIsRUFBZCxDQUEzQjtBQUNBRSxNQUFBQSxjQUFjLENBQUMrQyxrQkFBRCxDQUFkLEdBQXFDeEUsS0FBckM7QUFDRCxLQUhEO0FBSUQsR0FQRDtBQVFELENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xyXG5pbXBvcnQgZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XHJcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JFYWNoJztcclxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcclxuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcclxuaW1wb3J0IHJlbW92ZUFjY2VudHMgZnJvbSAncmVtb3ZlLWFjY2VudHMnO1xyXG5pbXBvcnQgeyBtZW1vaXplZENpdHlUeXBlIH0gZnJvbSAnLi4vdHlwZXMvbWVtb2l6ZWRDaXR5VHlwZSc7XHJcbmltcG9ydCB7IG1lbW9pemVkUmVnaW9uV2l0aFN0YXRlVHlwZSB9IGZyb20gJy4uL3R5cGVzL21lbW9pemVkUmVnaW9uV2l0aFN0YXRlVHlwZSc7XHJcbmltcG9ydCB7IG1lbW9pemVkU3RhdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMvbWVtb2l6ZWRTdGF0ZVR5cGUnO1xyXG5pbXBvcnQgeyByZWdpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvcmVnaW9uVHlwZSc7XHJcbmltcG9ydCB7IHJlZ2lvbldpdGhTdGF0ZVR5cGUgfSBmcm9tICcuLi90eXBlcy9yZWdpb25XaXRoU3RhdGVUeXBlJztcclxuaW1wb3J0IHsgc3RhdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGVUeXBlJztcclxuaW1wb3J0IGFjIGZyb20gJy4vZXN0YWRvcy9hY3JlJztcclxuaW1wb3J0IGFsIGZyb20gJy4vZXN0YWRvcy9hbGFnb2FzJztcclxuaW1wb3J0IGFwIGZyb20gJy4vZXN0YWRvcy9hbWFwYSc7XHJcbmltcG9ydCBhbSBmcm9tICcuL2VzdGFkb3MvYW1hem9uYXMnO1xyXG5pbXBvcnQgYmEgZnJvbSAnLi9lc3RhZG9zL2JhaGlhJztcclxuaW1wb3J0IGNlIGZyb20gJy4vZXN0YWRvcy9jZWFyYSc7XHJcbmltcG9ydCBkZiBmcm9tICcuL2VzdGFkb3MvZGYnO1xyXG5pbXBvcnQgZXMgZnJvbSAnLi9lc3RhZG9zL2VzcGlyaXRvc2FudG8nO1xyXG5pbXBvcnQgZ28gZnJvbSAnLi9lc3RhZG9zL2dvaWFzJztcclxuaW1wb3J0IG1hIGZyb20gJy4vZXN0YWRvcy9tYXJhbmhhbyc7XHJcbmltcG9ydCBtdCBmcm9tICcuL2VzdGFkb3MvbWF0b2dyb3Nzbyc7XHJcbmltcG9ydCBtcyBmcm9tICcuL2VzdGFkb3MvbWF0b2dyb3Nzb2Rvc3VsJztcclxuaW1wb3J0IG1nIGZyb20gJy4vZXN0YWRvcy9taW5hc2dlcmFpcyc7XHJcbmltcG9ydCBwYSBmcm9tICcuL2VzdGFkb3MvcGFyYSc7XHJcbmltcG9ydCBwYiBmcm9tICcuL2VzdGFkb3MvcGFyYWliYSc7XHJcbmltcG9ydCBwciBmcm9tICcuL2VzdGFkb3MvcGFyYW5hJztcclxuaW1wb3J0IHBpIGZyb20gJy4vZXN0YWRvcy9waWF1aSc7XHJcbmltcG9ydCByaiBmcm9tICcuL2VzdGFkb3MvcmlvZGVqYW5laXJvJztcclxuaW1wb3J0IHJuIGZyb20gJy4vZXN0YWRvcy9yaW9ncmFuZGVkb25vcnRlJztcclxuaW1wb3J0IHJzIGZyb20gJy4vZXN0YWRvcy9yaW9ncmFuZGVkb3N1bCc7XHJcbmltcG9ydCBybyBmcm9tICcuL2VzdGFkb3Mvcm9uZG9uaWEnO1xyXG5pbXBvcnQgcnIgZnJvbSAnLi9lc3RhZG9zL3JvcmFpbWEnO1xyXG5pbXBvcnQgc2MgZnJvbSAnLi9lc3RhZG9zL3NhbnRhY2F0YXJpbmEnO1xyXG5pbXBvcnQgc3AgZnJvbSAnLi9lc3RhZG9zL3Nhb3BhdWxvJztcclxuaW1wb3J0IHNlIGZyb20gJy4vZXN0YWRvcy9zZXJnaXBlJztcclxuaW1wb3J0IHRvIGZyb20gJy4vZXN0YWRvcy90b2NhbnRpbnMnO1xyXG5cclxuY29uc3Qgc3RhdGVzOiBzdGF0ZVR5cGVbXSA9IFtcclxuICBhYyxcclxuICBhbCxcclxuICBhbSxcclxuICBhcCxcclxuICBiYSxcclxuICBjZSxcclxuICBkZixcclxuICBlcyxcclxuICBnbyxcclxuICBtYSxcclxuICBtZyxcclxuICBtcyxcclxuICBtdCxcclxuICBwYSxcclxuICBwYixcclxuICBwaSxcclxuICBwcixcclxuICByaixcclxuICBybixcclxuICBybyxcclxuICBycixcclxuICBycyxcclxuICBzYyxcclxuICBzZSxcclxuICBzcCxcclxuICB0byxcclxuXTtcclxuXHJcbmNvbnN0IHNvdXRoRWFzdFN0YXRlczogc3RyaW5nW10gPSBbXHJcbiAgJ1PDo28gUGF1bG8nLFxyXG4gICdSaW8gZGUgSmFuZWlybycsXHJcbiAgJ0VzcMOtcml0byBTYW50bycsXHJcbiAgJ01pbmFzIEdlcmFpcycsXHJcbl07XHJcbmNvbnN0IHNvdXRoUmVnaW9uU3RhdGVzOiBzdHJpbmdbXSA9IFtcclxuICAnUGFyYW7DoScsXHJcbiAgJ1JpbyBHcmFuZGUgZG8gU3VsJyxcclxuICAnU2FudGEgQ2F0YXJpbmEnLFxyXG5dO1xyXG5jb25zdCBub3J0aFJlZ2lvblN0YXRlczogc3RyaW5nW10gPSBbXHJcbiAgJ0FjcmUnLFxyXG4gICdBbWFww6EnLFxyXG4gICdBbWF6b25hcycsXHJcbiAgJ1BhcsOhJyxcclxuICAnUm9uZG9uaWEnLFxyXG4gICdSb3JhaW1hJyxcclxuICAnVG9jYW50aW5zJyxcclxuXTtcclxuY29uc3Qgbm9ydGhFYXN0UmVnaW9uU3RhdGVzOiBzdHJpbmdbXSA9IFtcclxuICAnQWxhZ29hcycsXHJcbiAgJ0JhaGlhJyxcclxuICAnTWFyYW5ow6NvJyxcclxuICAnUGFyYWliYScsXHJcbiAgJ1Blcm5hbWJ1Y28nLFxyXG4gICdQaWF1w60nLFxyXG4gICdSaW8gR3JhbmRlIGRvIE5vcnRlJyxcclxuICAnU2VyZ2lwZScsXHJcbl07XHJcbmNvbnN0IG1pZGRsZUVhc3RSZWdpb25TdGF0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICdEaXN0cml0byBGZWRlcmFsJyxcclxuICAnR29pw6FzJyxcclxuICAnTWF0byBHcm9zc28nLFxyXG4gICdNYXRvIEdyb3NzbyBkbyBTdWwnLFxyXG5dO1xyXG5cclxuY29uc3Qgc291dGhFYXN0UmVnaW9uU3RhdGVzQW5kQ2l0aWVzID1cclxuICBmaWx0ZXIoc3RhdGVzLCBzdGF0ZSA9PiBzb3V0aEVhc3RTdGF0ZXMuaW5kZXhPZihzdGF0ZS5zdGF0ZSkgIT09IC0xKTtcclxuY29uc3Qgc291dGhSZWdpb25TdGF0ZXNBbmRDaXRpZXMgPVxyXG4gIGZpbHRlcihzdGF0ZXMsIHN0YXRlID0+IHNvdXRoUmVnaW9uU3RhdGVzLmluZGV4T2Yoc3RhdGUuc3RhdGUpICE9PSAtMSk7XHJcbmNvbnN0IG5vcnRoUmVnaW9uU3RhdGVzQW5kQ2l0aWVzID1cclxuICBmaWx0ZXIoc3RhdGVzLCBzdGF0ZSA9PiBub3J0aFJlZ2lvblN0YXRlcy5pbmRleE9mKHN0YXRlLnN0YXRlKSAhPT0gLTEpO1xyXG5jb25zdCBub3J0aEVhc3RSZWdpb25TdGF0ZXNBbmRDaXRpZXMgPVxyXG4gIGZpbHRlcihzdGF0ZXMsIHN0YXRlID0+IG5vcnRoRWFzdFJlZ2lvblN0YXRlcy5pbmRleE9mKHN0YXRlLnN0YXRlKSAhPT0gLTEpO1xyXG5jb25zdCBtaWRkbGVFYXN0UmVnaW9uU3RhdGVzQW5kQ2l0aWVzID1cclxuICBmaWx0ZXIoc3RhdGVzLCBzdGF0ZSA9PiBtaWRkbGVFYXN0UmVnaW9uU3RhdGVzLmluZGV4T2Yoc3RhdGUuc3RhdGUpICE9PSAtMSk7XHJcblxyXG5jb25zdCBzb3V0aEVhc3RSZWdpb25EYXRhOiByZWdpb25UeXBlID0ge1xyXG4gIHJlZ2lvbk5hbWU6ICdTdWRlc3RlJyxcclxuICBzdGF0ZXM6IHNvdXRoRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IHNvdXRoUmVnaW9uRGF0YTogcmVnaW9uVHlwZSA9IHtcclxuICByZWdpb25OYW1lOiAnU3VsJyxcclxuICBzdGF0ZXM6IHNvdXRoUmVnaW9uU3RhdGVzQW5kQ2l0aWVzLFxyXG59O1xyXG5cclxuY29uc3Qgbm9ydGhSZWdpb25EYXRhOiByZWdpb25UeXBlID0ge1xyXG4gIHJlZ2lvbk5hbWU6ICdOb3J0ZScsXHJcbiAgc3RhdGVzOiBub3J0aFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IG5vcnRoRWFzdFJlZ2lvbkRhdGE6IHJlZ2lvblR5cGUgPSB7XHJcbiAgcmVnaW9uTmFtZTogJ05vcmRlc3RlJyxcclxuICBzdGF0ZXM6IG5vcnRoRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IG1pZGRsZUVhc3RSZWdpb25EYXRhOiByZWdpb25UeXBlID0ge1xyXG4gIHJlZ2lvbk5hbWU6ICdDZW50cm8tT2VzdGUnLFxyXG4gIHN0YXRlczogbWlkZGxlRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbnR5cGUgcmVnaW9uc1R5cGUgPSB7XHJcbiAgW3JlZ2lvbk5hbWU6IHN0cmluZ106IHJlZ2lvblR5cGU7XHJcbn07XHJcblxyXG5jb25zdCByZWdpb25zOiByZWdpb25zVHlwZSA9IHtcclxuICBjZW50cm9vZXN0ZTogbWlkZGxlRWFzdFJlZ2lvbkRhdGEsXHJcbiAgbm9yZGVzdGU6IG5vcnRoRWFzdFJlZ2lvbkRhdGEsXHJcbiAgbm9ydGU6IG5vcnRoUmVnaW9uRGF0YSxcclxuICBzdWRlc3RlOiBzb3V0aEVhc3RSZWdpb25EYXRhLFxyXG4gIHN1bDogc291dGhSZWdpb25EYXRhLFxyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplZENpdGllcyA9IG1hcChzdGF0ZXMsIChzdGF0ZTogc3RhdGVUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhdGVDaXRpZXNOb3JtYWxpemVkID0gbWFwKHN0YXRlLmNpdGllcywgY2l0eSA9PiByZW1vdmVBY2NlbnRzKGNpdHkucmVwbGFjZSgvXFxzfC18Xy9nLCAnJykudG9Mb3dlckNhc2UoKSkpO1xyXG4gIHJldHVybiB7IC4uLnN0YXRlLCBjaXRpZXM6IHN0YXRlQ2l0aWVzTm9ybWFsaXplZCB9O1xyXG59KTtcclxuXHJcbmNvbnN0IG1lbW9pemVkU3RhdGVzOiBtZW1vaXplZFN0YXRlVHlwZSA9IHt9O1xyXG5jb25zdCBtZW1vaXplZENpdGllczogbWVtb2l6ZWRDaXR5VHlwZSA9IHt9O1xyXG5jb25zdCBtZW1vaXplZFJlZ2lvbnM6IG1lbW9pemVkUmVnaW9uV2l0aFN0YXRlVHlwZSA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSWZWYXJpYWJsZUlzQm9vbGVhbiA9ICh2YXJpYWJsZTogYm9vbGVhbiwgdmFyaWFibGVOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICBpZiAodmFyaWFibGUgIT09IHRydWUgJiYgdmFyaWFibGUgIT09IGZhbHNlKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7dmFyaWFibGVOYW1lfVwiIHBhcmFtZXRlciBzaG91bGQgYmUgb2YgYm9vbGVhbiB0eXBlYCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRQYXJhbSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgcmVxdWlyZWRQYXJhbUVycm9yOiBFcnJvciA9IG5ldyBFcnJvcihgUmVxdWlyZWQgcGFyYW1ldGVyLCBcIiR7cGFyYW19XCIgaXMgbWlzc2luZy5gKTtcclxuICAvLyBwcmVzZXJ2ZSBvcmlnaW5hbCBzdGFjayB0cmFjZVxyXG4gIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpXHJcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShcclxuICAgICAgcmVxdWlyZWRQYXJhbUVycm9yLFxyXG4gICAgICByZXF1aXJlZFBhcmFtLFxyXG4gICAgKTtcclxuICB0aHJvdyByZXF1aXJlZFBhcmFtRXJyb3I7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVnaW9ucyA9ICh7XHJcbiAgICBzaG91bGRSZXR1cm5FbnRpcmVKc29uID0gZmFsc2UsXHJcbiAgfToge1xyXG4gICAgc2hvdWxkUmV0dXJuRW50aXJlSnNvbj86IGJvb2xlYW4sXHJcbiAgfSk6IHJlZ2lvblR5cGVbXSB8IHN0cmluZ1tdID0+IHtcclxuICBpZiAoc2hvdWxkUmV0dXJuRW50aXJlSnNvbiA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdzaG91bGRSZXR1cm5FbnRpcmVKc29uIHByb3BlcnR5IGNhbm5vdCBiZSBudWxsJyk7XHJcbiAgY2hlY2tJZlZhcmlhYmxlSXNCb29sZWFuKHNob3VsZFJldHVybkVudGlyZUpzb24sICdzaG91bGRSZXR1cm5FbnRpcmVKc29uJyk7XHJcbiAgaWYgKHNob3VsZFJldHVybkVudGlyZUpzb24pIHJldHVybiBtYXAocmVnaW9ucywgcmVnaW9uID0+IHJlZ2lvbik7XHJcbiAgcmV0dXJuIG1hcChyZWdpb25zLCByZWdpb24gPT4gcmVnaW9uLnJlZ2lvbk5hbWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbiA9ICh7IHJlZ2lvbiA9IHJlcXVpcmVkUGFyYW0oJ3JlZ2lvbicpIH06IHsgcmVnaW9uOiBzdHJpbmdbXSB9KTogcmVnaW9uVHlwZVtdID0+IHtcclxuICBpZiAoIXJlZ2lvbikgdGhyb3cgbmV3IEVycm9yKCdyZWdpb24gcGFyYW1ldGVyIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShyZWdpb24pKSB0aHJvdyBuZXcgRXJyb3IoJ3JlZ2lvbiBwYXJhbWV0ZXIgc2hvdWxkIGJlIGFuIEFycmF5Jyk7XHJcbiAgcmV0dXJuIG1hcChyZWdpb24sIHNpbmdsZVJlZ2lvbiA9PiB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkUmVnaW9uTmFtZSA9IHJlbW92ZUFjY2VudHMoc2luZ2xlUmVnaW9uLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgcmV0dXJuIHJlZ2lvbnNbbm9ybWFsaXplZFJlZ2lvbk5hbWVdO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRlUmVnaW9uID0gKHsgc3RhdGUgPSByZXF1aXJlZFBhcmFtKCdzdGF0ZScpLCBzaG91bGRSZXR1cm5FbnRpcmVKc29uID0gZmFsc2UgfTogeyBzdGF0ZTogc3RyaW5nLCBzaG91bGRSZXR1cm5FbnRpcmVKc29uPzogYm9vbGVhbiB9KTogc3RyaW5nIHwgcmVnaW9uVHlwZSB8IG51bGwgPT4ge1xyXG4gIGlmICghc3RhdGUpIHRocm93IG5ldyBFcnJvcignc3RhdGUgcHJvcGVydHkgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcigndmFyaWFibGUgc3RhdGUgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZFN0YXRlTmFtZSA9IHJlbW92ZUFjY2VudHMoc3RhdGUucmVwbGFjZSgvXFxzfC18Xy9nLCAnJykudG9Mb3dlckNhc2UoKSk7XHJcbiAgY29uc3QgbWVtb2l6ZWRTdGF0ZVJlZ2lvbiA9IG1lbW9pemVkUmVnaW9uc1tub3JtYWxpemVkU3RhdGVOYW1lXTtcclxuICBpZiAoIW1lbW9pemVkU3RhdGVSZWdpb24pIHtcclxuICAgIGNvbnN0IGZvdW5kUmVnaW9uOiByZWdpb25UeXBlIHwgbnVsbCA9IHJlZHVjZShyZWdpb25zLCAoYWNjOiByZWdpb25UeXBlLCByZWdpb246IHJlZ2lvblR5cGUpID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRSZWdpb246IHN0YXRlVHlwZVtdID0gcmVnaW9uLnN0YXRlcy5maWx0ZXIocmVnaW9uU3RhdGUgPT4ge1xyXG4gICAgICAgIHJldHVybiByZW1vdmVBY2NlbnRzKHJlZ2lvblN0YXRlLnN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpID09PSBub3JtYWxpemVkU3RhdGVOYW1lO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZpbHRlcmVkUmVnaW9uLmxlbmd0aCA+IDApIHJldHVybiByZWdpb247XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBudWxsIGFzIHVua25vd24gYXMgcmVnaW9uVHlwZSk7XHJcbiAgICBpZiAoIWZvdW5kUmVnaW9uKSByZXR1cm4gbnVsbDtcclxuICAgIG1lbW9pemVkUmVnaW9uc1tzdGF0ZV0gPSBmb3VuZFJlZ2lvbjtcclxuICAgIHJldHVybiBzaG91bGRSZXR1cm5FbnRpcmVKc29uID8gZm91bmRSZWdpb24gOiBmb3VuZFJlZ2lvbi5yZWdpb25OYW1lO1xyXG4gIH1cclxuICByZXR1cm4gc2hvdWxkUmV0dXJuRW50aXJlSnNvbiA/IG1lbW9pemVkU3RhdGVSZWdpb24gOiBtZW1vaXplZFN0YXRlUmVnaW9uLnJlZ2lvbk5hbWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2l0eVJlZ2lvbiA9ICh7XHJcbiAgY2l0eSA9IHJlcXVpcmVkUGFyYW0oJ2NpdHknKSxcclxuICBzaG91bGRSZXR1cm5FbnRpcmVKc29uID0gZmFsc2UsXHJcbn06IHtcclxuICAgIGNpdHk6IHN0cmluZyxcclxuICAgIHNob3VsZFJldHVybkVudGlyZUpzb24/OiBib29sZWFuLFxyXG4gIH0pOiBzdHJpbmcgfCByZWdpb25XaXRoU3RhdGVUeXBlIHwgbnVsbCA9PiB7XHJcbiAgaWYgKHR5cGVvZiBjaXR5ICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKCdjaXR5IHBhcmFtZXRlciBtdXN0IGJlIGEgc3RyaW5nJyk7XHJcbiAgaWYgKHR5cGVvZiBzaG91bGRSZXR1cm5FbnRpcmVKc29uICE9PSAnYm9vbGVhbicpIHRocm93IG5ldyBFcnJvcignc2hvdWxkUmV0dXJuRW50aXJlSnNvbiBwYXJhbWV0ZXIgbXVzdCBiZSBhIHN0cmluZycpO1xyXG4gIGNvbnN0IG1lbW9pemVkQ2l0eVJlZ2lvbjogcmVnaW9uV2l0aFN0YXRlVHlwZSA9IG1lbW9pemVkUmVnaW9uc1tjaXR5XTtcclxuICBpZiAoIW1lbW9pemVkQ2l0eVJlZ2lvbikge1xyXG4gICAgY29uc3QgZm91bmRSZWdpb24gPSBmaW5kKHJlZ2lvbnMsIChyZWdpb246IHJlZ2lvblR5cGUpID0+XHJcbiAgICAgICAgISFmaW5kKChyZWdpb24uc3RhdGVzKSwgKHN0YXRlOiBzdGF0ZVR5cGUpID0+IHN0YXRlLmNpdGllcy5pbmRleE9mKGNpdHkpID49IDApKTtcclxuICAgIGlmICghZm91bmRSZWdpb24pIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgW2ZvdW5kU3RhdGVdID0gZmlsdGVyKGZvdW5kUmVnaW9uLnN0YXRlcywgc3RhdGUgPT4gc3RhdGUuY2l0aWVzLmluZGV4T2YoY2l0eSkgPj0gMCk7XHJcbiAgICBjb25zdCBmb3VuZFJlZ2lvbldpdGhDaXR5U3RhdGUgPSB7IC4uLmZvdW5kUmVnaW9uLCBjaXR5U3RhdGU6IGZvdW5kU3RhdGUgfTtcclxuICAgIG1lbW9pemVkUmVnaW9uc1tjaXR5XSA9IGZvdW5kUmVnaW9uV2l0aENpdHlTdGF0ZTtcclxuICAgIGlmIChzaG91bGRSZXR1cm5FbnRpcmVKc29uKSByZXR1cm4gZm91bmRSZWdpb25XaXRoQ2l0eVN0YXRlO1xyXG4gICAgcmV0dXJuIGZvdW5kUmVnaW9uV2l0aENpdHlTdGF0ZS5yZWdpb25OYW1lO1xyXG4gIH1cclxuICBpZiAoc2hvdWxkUmV0dXJuRW50aXJlSnNvbilyZXR1cm4gbWVtb2l6ZWRDaXR5UmVnaW9uO1xyXG4gIHJldHVybiBtZW1vaXplZENpdHlSZWdpb24ucmVnaW9uTmFtZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgY2l0aWVzIG9mIHRoZSBnaXZlbiBzdGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVPYmplY3QgLSBUaGUgb2JqZWN0IHRoZSB0ZWxscyB0aGUgbmFtZSBvZiB0aGUgc3RhdGUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZU9iamVjdC5zdGF0ZSAtIFRoZSBzdGF0ZSBuYW1lLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjaXRpZXMgPSBhcGkuZ2V0U3RhdGVDaXRpZXMoeyBzdGF0ZTogJ1PDo28gUGF1bG8nIH0pO1xyXG4gKiAvLyB7IHN0YXRlOiAnU8OjbyBQYXVsbycsIGFiYnJldmlhdGlvbjogJ3NwJywgY2l0aWVzOiBbJ1NhbnRvcycsICdTw6NvIFZpY2VudGUnLCAnR3VhcnVqw6EnLC4uLl0gfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRlQ2l0aWVzID0gKHsgc3RhdGUgPSByZXF1aXJlZFBhcmFtKCdzdGF0ZScpIH06IHsgc3RhdGU6IHN0cmluZyB9KTogc3RhdGVUeXBlIHwgbnVsbCA9PiB7XHJcbiAgaWYgKCFzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKCdzdGF0ZSBwcm9wZXJ0eSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICBpZiAodHlwZW9mIHN0YXRlICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yICgnc3RhdGUgcHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZycpO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRTdGF0ZSA9IHJlbW92ZUFjY2VudHMoc3RhdGUucmVwbGFjZSgvXFxzfC18Xy9nLCAnJykudG9Mb3dlckNhc2UoKSk7XHJcbiAgY29uc3QgbWVtb2l6ZWRTdGF0ZTogc3RhdGVUeXBlID0gbWVtb2l6ZWRTdGF0ZXNbbm9ybWFsaXplZFN0YXRlXTtcclxuICBpZiAobWVtb2l6ZWRTdGF0ZSkgcmV0dXJuIG1lbW9pemVkU3RhdGU7XHJcbiAgY29uc3QgZmluZFN0YXRlSW5zdGFudGlhdGVkID0gZmluZFN0YXRlKHN0YXRlKTtcclxuICBjb25zdCBzdGF0ZUZvdW5kOiBzdGF0ZVR5cGUgfCB1bmRlZmluZWQgPSBmaW5kKHN0YXRlcywgZmluZFN0YXRlSW5zdGFudGlhdGVkKTtcclxuICBpZiAoIXN0YXRlRm91bmQpIHJldHVybiBudWxsO1xyXG4gIGlmIChzdGF0ZUZvdW5kKSBtZW1vaXplZFN0YXRlc1tub3JtYWxpemVkU3RhdGVdID0gc3RhdGVGb3VuZDtcclxuICByZXR1cm4gc3RhdGVGb3VuZDtcclxufTtcclxuXHJcbmNvbnN0IGZpbmRTdGF0ZSA9IChzdGF0ZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZFN0YXRlID0gcmVtb3ZlQWNjZW50cyhzdGF0ZS5yZXBsYWNlKC9cXHN8LXxfL2csICcnKS50b0xvd2VyQ2FzZSgpKTtcclxuICByZXR1cm4gKGVsZW1lbnQ6IHN0YXRlVHlwZSkgPT4gcmVtb3ZlQWNjZW50cyhlbGVtZW50LnN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpID09PSBub3JtYWxpemVkU3RhdGVcclxuICAgICAgfHwgZWxlbWVudC5hYmJyZXZpYXRpb24gPT09IG5vcm1hbGl6ZWRTdGF0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBjaXR5IG5hbWUgYW5kIHJldHVybnMgdGhlIGZ1bGwganNvbiBzdGF0ZVR5cGUgb2JqZWN0XHJcbiAqIG9yIG9ubHkgdGhlIG5hbWUgb2YgdGhlIHN0YXRlIGRlcGVuZGluZyBvbiBzaG91bGRSZXR1cm5FbnRpcmVKc29uIHByb3BlcnR5LlxyXG4gKiBJZiB0aGUgc3RhdGUgaXMgbm90IGZvdW5kLCBpdCByZXR1cm5zIGFuIGVtcHR5IG9iamVjdCBvciBhbiBlbXB0eSBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0aGUgdGVsbHMgdGhlIG5hbWUgb2YgdGhlIGNpdHkgYW5kIGlmIHRoZSByZXR1cm5cclxuICogc2hvdWxkIGJlIGFuIG9iamVjdCBvciBqdXN0IGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eU9iamVjdC5jaXR5IC0gVGhlIGNpdHkgbmFtZS5cclxuICogQHBhcmFtIHtib29sZWFufSBjaXR5T2JqZWN0LnNob3VsZFJldHVybkVudGlyZUpzb24gLSBUaGlzIHByb3BlcnR5IHRlbGxzIHRvIHRoZSBtZXRob2RcclxuICogdGhhdCB0aGUgcmV0dXJuIHNob3VsZCBvdSBzaG91bGQgbm90IGJlIHRoZSBmdWxsIHN0YXRlIG9iamVjdC5cclxuICogSWYgdGhlIHByb3BlcnR5IGlzIHRydWUsIGl0IHdpbGwgcmV0dXJuIHRoZSBlbnRpcmUgc3RhdGVUeXBlIG9iamVjdCxcclxuICogaWYgaXRzIGZhbHNlIG9yIG5vdCBzZXQsIGl0IHdpbGwgcmV0dXJuIGp1c3QgdGhlIHN0cmluZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBzdGF0ZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgY2l0aWVzID0gYXBpLmdldENpdHlTdGF0ZSh7IGNpdHk6ICdTYW50b3MnLCBzaG91bGRSZXR1cm5FbnRpcmVKc29uOiB0cnVlIH0pO1xyXG4gKiAvLyB7IHN0YXRlOiAnU8OjbyBQYXVsbycsIGFiYnJldmlhdGlvbjogJ3NwJywgY2l0aWVzOiBbJ1NhbnRvcycsICdTw6NvIFZpY2VudGUnLCAnR3VhcnVqw6EnLC4uLl0gfVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjaXRpZXMgPSBhcGkuZ2V0Q2l0eVN0YXRlKHsgY2l0eTogJ1NhbnRvcycgfSk7XHJcbiAqIC8vICdTw6NvIFBhdWxvJ1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjaXRpZXMgPSBhcGkuZ2V0Q2l0eVN0YXRlKHsgY2l0eTogJ1NhbnRvcycsIHNob3VsZFJldHVybkVudGlyZUpzb246IGZhbHNlIH0pO1xyXG4gKiAvLyAnU8OjbyBQYXVsbycsXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGNpdGllcyA9IGFwaS5nZXRDaXR5U3RhdGUoeyBjaXR5OiAncmFuZG9tQ2l0eScgfSk7XHJcbiAqIC8vIG51bGxcclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgY2l0aWVzID0gYXBpLmdldENpdHlTdGF0ZSh7IGNpdHk6ICdyYW5kb21DaXR5JyAsIHNob3VsZFJldHVybkVudGlyZUpzb246IGZhbHNlfSk7XHJcbiAqIC8vIG51bGxcclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgY2l0aWVzID0gYXBpLmdldENpdHlTdGF0ZSh7IGNpdHk6ICdyYW5kb21DaXR5Jywgc2hvdWxkUmV0dXJuRW50aXJlSnNvbjogdHJ1ZSB9KTtcclxuICogLy8gbnVsbFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENpdHlTdGF0ZSA9ICh7XHJcbiAgY2l0eSA9IHJlcXVpcmVkUGFyYW0oJ2NpdHknKSxcclxuICBzaG91bGRSZXR1cm5FbnRpcmVKc29uID0gZmFsc2UsXHJcbn06IHtcclxuICBjaXR5OiBzdHJpbmcsXHJcbiAgc2hvdWxkUmV0dXJuRW50aXJlSnNvbj86IGJvb2xlYW4sXHJcbn0pOiBzdHJpbmcgfCBzdGF0ZVR5cGUgfCBudWxsID0+IHtcclxuICBjaGVja0lmVmFyaWFibGVJc0Jvb2xlYW4oc2hvdWxkUmV0dXJuRW50aXJlSnNvbiwgJ3Nob3VsZFJldHVybkVudGlyZUpzb24nKTtcclxuICBjb25zdCBub3JtYWxpemVkQ2l0eSA9IHJlbW92ZUFjY2VudHMoY2l0eS5yZXBsYWNlKC9cXHN8LXxfL2csICcnKS50b0xvd2VyQ2FzZSgpKTtcclxuICBjb25zdCBtZW1vaXplZENpdHkgPSBtZW1vaXplZENpdGllc1tub3JtYWxpemVkQ2l0eV07XHJcbiAgaWYgKG1lbW9pemVkQ2l0eSkgcmV0dXJuIHNob3VsZFJldHVybkVudGlyZUpzb24gPyBtZW1vaXplZENpdHkgOiBtZW1vaXplZENpdHkuc3RhdGU7XHJcbiAgY29uc3QgZmluZENpdHkgPSAoZWxlbWVudDogc3RhdGVUeXBlKTogYm9vbGVhbiA9PiBlbGVtZW50LmNpdGllcy5pbmRleE9mKG5vcm1hbGl6ZWRDaXR5KSA+PSAwO1xyXG4gIGNvbnN0IHN0YXRlOiBzdGF0ZVR5cGUgfCB1bmRlZmluZWQgPSBmaW5kKG5vcm1hbGl6ZWRDaXRpZXMsIGZpbmRDaXR5KTtcclxuICBpZiAoIXN0YXRlKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBzdGF0ZUluZGV4ID0gbm9ybWFsaXplZENpdGllcy5pbmRleE9mKHN0YXRlKTtcclxuICBjb25zdCByZWFsU3RhdGUgPSBzdGF0ZXNbc3RhdGVJbmRleF07XHJcbiAgbWVtb2l6ZWRDaXRpZXNbbm9ybWFsaXplZENpdHldID0gcmVhbFN0YXRlO1xyXG4gIGlmIChzaG91bGRSZXR1cm5FbnRpcmVKc29uKSByZXR1cm4gcmVhbFN0YXRlO1xyXG4gIHJldHVybiByZWFsU3RhdGUuc3RhdGU7XHJcbn07XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCBtZW1vaXplIGFsbCB0aGUgc3RhdGVzIGFuZCBjaXRpZXMsIGRvaW5nIGl0IGVhZ2VybHkuXHJcbiAqIEBleGFtcGxlXHJcbiAqIGVhZ2VyTWVtb2l6YXRpb24oKTtcclxuICogLy8gVXNpbmcgaXQgd2lsbCBtZW1vaXplIGV2ZXJ5dGhpbmcsIG1ha2luZyBhcGkuZ2V0Q2l0eVN0YXRlIGFuZCBhcGkuZ2V0U3RhdGVDaXRpZXMgZmFzdGVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZWFnZXJNZW1vaXphdGlvbiA9ICgpOiB2b2lkID0+IHtcclxuICBmb3JFYWNoKHN0YXRlcywgKHN0YXRlOiBzdGF0ZVR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRTdGF0ZU5hbWUgPSByZW1vdmVBY2NlbnRzKHN0YXRlLnN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgbWVtb2l6ZWRTdGF0ZXNbbm9ybWFsaXplZFN0YXRlTmFtZV0gPSBzdGF0ZTtcclxuICAgIGZvckVhY2goc3RhdGUuY2l0aWVzLCAoY2l0eTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDaXR5TmFtZSA9IHJlbW92ZUFjY2VudHMoY2l0eS5yZXBsYWNlKC9cXHN8LXxfL2csICcnKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgbWVtb2l6ZWRDaXRpZXNbbm9ybWFsaXplZENpdHlOYW1lXSA9IHN0YXRlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==