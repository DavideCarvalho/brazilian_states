"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eagerMemoization = exports.getCityState = exports.getStateCities = exports.getCityRegion = exports.getStateRegion = exports.getRegion = exports.getAllRegions = exports.requiredParam = exports.checkIfVariableIsBoolean = void 0;

var _filter3 = _interopRequireDefault(require("lodash/filter"));

var _find = _interopRequireDefault(require("lodash/find"));

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var _map = _interopRequireDefault(require("lodash/map"));

var _removeAccents = _interopRequireDefault(require("remove-accents"));

var _acre = _interopRequireDefault(require("./estados/acre"));

var _alagoas = _interopRequireDefault(require("./estados/alagoas"));

var _amapa = _interopRequireDefault(require("./estados/amapa"));

var _amazonas = _interopRequireDefault(require("./estados/amazonas"));

var _bahia = _interopRequireDefault(require("./estados/bahia"));

var _ceara = _interopRequireDefault(require("./estados/ceara"));

var _df = _interopRequireDefault(require("./estados/df"));

var _espiritosanto = _interopRequireDefault(require("./estados/espiritosanto"));

var _goiania = _interopRequireDefault(require("./estados/goiania"));

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

var _regions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var api = {};
var states = [_acre.default, _alagoas.default, _amazonas.default, _amapa.default, _bahia.default, _ceara.default, _df.default, _espiritosanto.default, _goiania.default, _maranhao.default, _minasgerais.default, _matogrossodosul.default, _matogrosso.default, _para.default, _paraiba.default, _piaui.default, _parana.default, _riodejaneiro.default, _riograndedonorte.default, _rondonia.default, _roraima.default, _riograndedosul.default, _santacatarina.default, _sergipe.default, _saopaulo.default, _tocantins.default];
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
var regions = (_regions = {}, _defineProperty(_regions, 'centrooeste', middleEastRegionData), _defineProperty(_regions, "nordeste", northEastRegionData), _defineProperty(_regions, "norte", northRegionData), _defineProperty(_regions, "sudeste", southEastRegionData), _defineProperty(_regions, "sul", southRegionData), _regions);
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

  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(requiredParamError, requiredParam);
  }

  throw requiredParamError;
};

exports.requiredParam = requiredParam;

var getAllRegions = function getAllRegions(_ref) {
  var _ref$shouldReturnEnti = _ref.shouldReturnEntireJson,
      shouldReturnEntireJson = _ref$shouldReturnEnti === void 0 ? false : _ref$shouldReturnEnti;
  if (shouldReturnEntireJson === null) throw new Error('shouldReturnEntireJson property cannot be null ');
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
      state = _ref3$state === void 0 ? requiredParam('state') : _ref3$state;
  if (!state) throw new Error('state property cannot be null or undefined');
  if (typeof state !== 'string') throw new Error('variable state should be a string');
  var memoizedStateRegion = memoizedRegions[state];

  if (!memoizedStateRegion) {
    var foundRegion = (0, _find.default)(regions, function (region) {
      return (0, _find.default)(region.states, function (regionState) {
        var normalizedStateName = (0, _removeAccents.default)(state.replace(/\s|-|_/g).toLowerCase());
        return (0, _removeAccents.default)(regionState.state.replace(/\s|-|_/g).toLowerCase()) === normalizedStateName;
      });
    });
    if (!foundRegion) return {};
    memoizedRegions[state] = foundRegion;
    return foundRegion;
  }

  return memoizedStateRegion;
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
      return (0, _find.default)(region.states, function (state) {
        return state.cities.indexOf(city) >= 0;
      });
    });

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

  if (memoizedState) {
    return memoizedState;
  }

  var findStateInstantiated = findState(state);
  var stateFound = (0, _find.default)(states, findStateInstantiated);

  if (stateFound) {
    memoizedStates[normalizedState] = stateFound;
  }

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
  if (!state) return shouldReturnEntireJson ? {} : '';
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
    var normalizedStateName = (0, _removeAccents.default)(state.state.replace(/\s|-|_/g).toLowerCase());
    memoizedStates[normalizedStateName] = state;
    (0, _forEach.default)(state.cities, function (city) {
      var normalizedCityName = (0, _removeAccents.default)(city.replace(/\s|-|_/g).toLowerCase());
      memoizedCities[normalizedCityName] = state;
    });
  });
};

exports.eagerMemoization = eagerMemoization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvZXN0YWRvcy50cyJdLCJuYW1lcyI6WyJhcGkiLCJzdGF0ZXMiLCJhYyIsImFsIiwiYW0iLCJhcCIsImJhIiwiY2UiLCJkZiIsImVzIiwiZ28iLCJtYSIsIm1nIiwibXMiLCJtdCIsInBhIiwicGIiLCJwaSIsInByIiwicmoiLCJybiIsInJvIiwicnIiLCJycyIsInNjIiwic2UiLCJzcCIsInRvIiwic291dGhFYXN0U3RhdGVzIiwic291dGhSZWdpb25TdGF0ZXMiLCJub3J0aFJlZ2lvblN0YXRlcyIsIm5vcnRoRWFzdFJlZ2lvblN0YXRlcyIsIm1pZGRsZUVhc3RSZWdpb25TdGF0ZXMiLCJzb3V0aEVhc3RSZWdpb25TdGF0ZXNBbmRDaXRpZXMiLCJzdGF0ZSIsImluZGV4T2YiLCJzb3V0aFJlZ2lvblN0YXRlc0FuZENpdGllcyIsIm5vcnRoUmVnaW9uU3RhdGVzQW5kQ2l0aWVzIiwibm9ydGhFYXN0UmVnaW9uU3RhdGVzQW5kQ2l0aWVzIiwibWlkZGxlRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyIsInNvdXRoRWFzdFJlZ2lvbkRhdGEiLCJyZWdpb25OYW1lIiwic291dGhSZWdpb25EYXRhIiwibm9ydGhSZWdpb25EYXRhIiwibm9ydGhFYXN0UmVnaW9uRGF0YSIsIm1pZGRsZUVhc3RSZWdpb25EYXRhIiwicmVnaW9ucyIsIm5vcm1hbGl6ZWRDaXRpZXMiLCJzdGF0ZUNpdGllc05vcm1hbGl6ZWQiLCJjaXRpZXMiLCJjaXR5IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibWVtb2l6ZWRTdGF0ZXMiLCJtZW1vaXplZENpdGllcyIsIm1lbW9pemVkUmVnaW9ucyIsImNoZWNrSWZWYXJpYWJsZUlzQm9vbGVhbiIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiRXJyb3IiLCJyZXF1aXJlZFBhcmFtIiwicGFyYW0iLCJyZXF1aXJlZFBhcmFtRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImdldEFsbFJlZ2lvbnMiLCJzaG91bGRSZXR1cm5FbnRpcmVKc29uIiwicmVnaW9uIiwiZ2V0UmVnaW9uIiwiQXJyYXkiLCJpc0FycmF5Iiwic2luZ2xlUmVnaW9uIiwibm9ybWFsaXplZFJlZ2lvbk5hbWUiLCJnZXRTdGF0ZVJlZ2lvbiIsIm1lbW9pemVkU3RhdGVSZWdpb24iLCJmb3VuZFJlZ2lvbiIsInJlZ2lvblN0YXRlIiwibm9ybWFsaXplZFN0YXRlTmFtZSIsImdldENpdHlSZWdpb24iLCJtZW1vaXplZENpdHlSZWdpb24iLCJmb3VuZFN0YXRlIiwiZm91bmRSZWdpb25XaXRoQ2l0eVN0YXRlIiwiY2l0eVN0YXRlIiwiZ2V0U3RhdGVDaXRpZXMiLCJub3JtYWxpemVkU3RhdGUiLCJtZW1vaXplZFN0YXRlIiwiZmluZFN0YXRlSW5zdGFudGlhdGVkIiwiZmluZFN0YXRlIiwic3RhdGVGb3VuZCIsImVsZW1lbnQiLCJhYmJyZXZpYXRpb24iLCJnZXRDaXR5U3RhdGUiLCJub3JtYWxpemVkQ2l0eSIsIm1lbW9pemVkQ2l0eSIsImZpbmRDaXR5Iiwic3RhdGVJbmRleCIsInJlYWxTdGF0ZSIsImVhZ2VyTWVtb2l6YXRpb24iLCJub3JtYWxpemVkQ2l0eU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBUSxHQUFHLEVBQWpCO0FBRUEsSUFBTUMsTUFBbUIsR0FBRyxDQUMxQkMsYUFEMEIsRUFFMUJDLGdCQUYwQixFQUcxQkMsaUJBSDBCLEVBSTFCQyxjQUowQixFQUsxQkMsY0FMMEIsRUFNMUJDLGNBTjBCLEVBTzFCQyxXQVAwQixFQVExQkMsc0JBUjBCLEVB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QUFDQXhDLEVBQUFBLGNBQWMsQ0FBQ3FDLGNBQUQsQ0FBZCxHQUFpQ0ksU0FBakM7QUFDQSxNQUFJOUIsc0JBQUosRUFBNEIsT0FBTzhCLFNBQVA7QUFDNUIsU0FBT0EsU0FBUyxDQUFDN0QsS0FBakI7QUFDRCxDQW5CTTtBQXFCUDs7Ozs7Ozs7OztBQU1PLElBQU04RCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQVk7QUFDMUMsd0JBQVEvRixNQUFSLEVBQWdCLFVBQUNpQyxLQUFELEVBQXNCO0FBQ3BDLFFBQU0wQyxtQkFBbUIsR0FBRyw0QkFBYzFDLEtBQUssQ0FBQ0EsS0FBTixDQUFZaUIsT0FBWixDQUFvQixTQUFwQixFQUErQkMsV0FBL0IsRUFBZCxDQUE1QjtBQUNBQyxJQUFBQSxjQUFjLENBQUN1QixtQkFBRCxDQUFkLEdBQXNDMUMsS0FBdEM7QUFDQSwwQkFBUUEsS0FBSyxDQUFDZSxNQUFkLEVBQXNCLFVBQUNDLElBQUQsRUFBa0I7QUFDdEMsVUFBTStDLGtCQUFrQixHQUFHLDRCQUFjL0MsSUFBSSxDQUFDQyxPQUFMLENBQWEsU0FBYixFQUF3QkMsV0FBeEIsRUFBZCxDQUEzQjtBQUNBRSxNQUFBQSxjQUFjLENBQUMyQyxrQkFBRCxDQUFkLEdBQXFDL0QsS0FBckM7QUFDRCxLQUhEO0FBSUQsR0FQRDtBQVFELENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xyXG5pbXBvcnQgZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XHJcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JFYWNoJztcclxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcclxuaW1wb3J0IHJlbW92ZUFjY2VudHMgZnJvbSAncmVtb3ZlLWFjY2VudHMnO1xyXG5pbXBvcnQgeyBtZW1vaXplZENpdHlUeXBlIH0gZnJvbSAnLi4vdHlwZXMvbWVtb2l6ZWRDaXR5VHlwZSc7XHJcbmltcG9ydCB7IG1lbW9pemVkUmVnaW9uV2l0aFN0YXRlVHlwZSB9IGZyb20gJy4uL3R5cGVzL21lbW9pemVkUmVnaW9uV2l0aFN0YXRlVHlwZSc7XHJcbmltcG9ydCB7IG1lbW9pemVkU3RhdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMvbWVtb2l6ZWRTdGF0ZVR5cGUnO1xyXG5pbXBvcnQgeyByZWdpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvcmVnaW9uVHlwZSc7XHJcbmltcG9ydCB7IHJlZ2lvbldpdGhTdGF0ZVR5cGUgfSBmcm9tICcuLi90eXBlcy9yZWdpb25XaXRoU3RhdGVUeXBlJztcclxuaW1wb3J0IHsgc3RhdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc3RhdGVUeXBlJztcclxuaW1wb3J0IGFjIGZyb20gJy4vZXN0YWRvcy9hY3JlJztcclxuaW1wb3J0IGFsIGZyb20gJy4vZXN0YWRvcy9hbGFnb2FzJztcclxuaW1wb3J0IGFwIGZyb20gJy4vZXN0YWRvcy9hbWFwYSc7XHJcbmltcG9ydCBhbSBmcm9tICcuL2VzdGFkb3MvYW1hem9uYXMnO1xyXG5pbXBvcnQgYmEgZnJvbSAnLi9lc3RhZG9zL2JhaGlhJztcclxuaW1wb3J0IGNlIGZyb20gJy4vZXN0YWRvcy9jZWFyYSc7XHJcbmltcG9ydCBkZiBmcm9tICcuL2VzdGFkb3MvZGYnO1xyXG5pbXBvcnQgZXMgZnJvbSAnLi9lc3RhZG9zL2VzcGlyaXRvc2FudG8nO1xyXG5pbXBvcnQgZ28gZnJvbSAnLi9lc3RhZG9zL2dvaWFuaWEnO1xyXG5pbXBvcnQgbWEgZnJvbSAnLi9lc3RhZG9zL21hcmFuaGFvJztcclxuaW1wb3J0IG10IGZyb20gJy4vZXN0YWRvcy9tYXRvZ3Jvc3NvJztcclxuaW1wb3J0IG1zIGZyb20gJy4vZXN0YWRvcy9tYXRvZ3Jvc3NvZG9zdWwnO1xyXG5pbXBvcnQgbWcgZnJvbSAnLi9lc3RhZG9zL21pbmFzZ2VyYWlzJztcclxuaW1wb3J0IHBhIGZyb20gJy4vZXN0YWRvcy9wYXJhJztcclxuaW1wb3J0IHBiIGZyb20gJy4vZXN0YWRvcy9wYXJhaWJhJztcclxuaW1wb3J0IHByIGZyb20gJy4vZXN0YWRvcy9wYXJhbmEnO1xyXG5pbXBvcnQgcGkgZnJvbSAnLi9lc3RhZG9zL3BpYXVpJztcclxuaW1wb3J0IHJqIGZyb20gJy4vZXN0YWRvcy9yaW9kZWphbmVpcm8nO1xyXG5pbXBvcnQgcm4gZnJvbSAnLi9lc3RhZG9zL3Jpb2dyYW5kZWRvbm9ydGUnO1xyXG5pbXBvcnQgcnMgZnJvbSAnLi9lc3RhZG9zL3Jpb2dyYW5kZWRvc3VsJztcclxuaW1wb3J0IHJvIGZyb20gJy4vZXN0YWRvcy9yb25kb25pYSc7XHJcbmltcG9ydCByciBmcm9tICcuL2VzdGFkb3Mvcm9yYWltYSc7XHJcbmltcG9ydCBzYyBmcm9tICcuL2VzdGFkb3Mvc2FudGFjYXRhcmluYSc7XHJcbmltcG9ydCBzcCBmcm9tICcuL2VzdGFkb3Mvc2FvcGF1bG8nO1xyXG5pbXBvcnQgc2UgZnJvbSAnLi9lc3RhZG9zL3NlcmdpcGUnO1xyXG5pbXBvcnQgdG8gZnJvbSAnLi9lc3RhZG9zL3RvY2FudGlucyc7XHJcblxyXG5jb25zdCBhcGk6IGFueSA9IHt9O1xyXG5cclxuY29uc3Qgc3RhdGVzOiBzdGF0ZVR5cGVbXSA9IFtcclxuICBhYyxcclxuICBhbCxcclxuICBhbSxcclxuICBhcCxcclxuICBiYSxcclxuICBjZSxcclxuICBkZixcclxuICBlcyxcclxuICBnbyxcclxuICBtYSxcclxuICBtZyxcclxuICBtcyxcclxuICBtdCxcclxuICBwYSxcclxuICBwYixcclxuICBwaSxcclxuICBwcixcclxuICByaixcclxuICBybixcclxuICBybyxcclxuICBycixcclxuICBycyxcclxuICBzYyxcclxuICBzZSxcclxuICBzcCxcclxuICB0byxcclxuXTtcclxuXHJcbmNvbnN0IHNvdXRoRWFzdFN0YXRlczogc3RyaW5nW10gPSBbXHJcbiAgJ1PDo28gUGF1bG8nLFxyXG4gICdSaW8gZGUgSmFuZWlybycsXHJcbiAgJ0VzcMOtcml0byBTYW50bycsXHJcbiAgJ01pbmFzIEdlcmFpcycsXHJcbl07XHJcbmNvbnN0IHNvdXRoUmVnaW9uU3RhdGVzOiBzdHJpbmdbXSA9IFtcclxuICAnUGFyYW7DoScsXHJcbiAgJ1JpbyBHcmFuZGUgZG8gU3VsJyxcclxuICAnU2FudGEgQ2F0YXJpbmEnLFxyXG5dO1xyXG5jb25zdCBub3J0aFJlZ2lvblN0YXRlczogc3RyaW5nW10gPSBbXHJcbiAgJ0FjcmUnLFxyXG4gICdBbWFww6EnLFxyXG4gICdBbWF6b25hcycsXHJcbiAgJ1BhcsOhJyxcclxuICAnUm9uZG9uaWEnLFxyXG4gICdSb3JhaW1hJyxcclxuICAnVG9jYW50aW5zJyxcclxuXTtcclxuY29uc3Qgbm9ydGhFYXN0UmVnaW9uU3RhdGVzOiBzdHJpbmdbXSA9IFtcclxuICAnQWxhZ29hcycsXHJcbiAgJ0JhaGlhJyxcclxuICAnTWFyYW5ow6NvJyxcclxuICAnUGFyYWliYScsXHJcbiAgJ1Blcm5hbWJ1Y28nLFxyXG4gICdQaWF1w60nLFxyXG4gICdSaW8gR3JhbmRlIGRvIE5vcnRlJyxcclxuICAnU2VyZ2lwZScsXHJcbl07XHJcbmNvbnN0IG1pZGRsZUVhc3RSZWdpb25TdGF0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICdEaXN0cml0byBGZWRlcmFsJyxcclxuICAnR29pw6FzJyxcclxuICAnTWF0byBHcm9zc28nLFxyXG4gICdNYXRvIEdyb3NzbyBkbyBTdWwnLFxyXG5dO1xyXG5cclxuY29uc3Qgc291dGhFYXN0UmVnaW9uU3RhdGVzQW5kQ2l0aWVzID1cclxuICBmaWx0ZXIoc3RhdGVzLCBzdGF0ZSA9PiBzb3V0aEVhc3RTdGF0ZXMuaW5kZXhPZihzdGF0ZS5zdGF0ZSkgIT09IC0xKTtcclxuY29uc3Qgc291dGhSZWdpb25TdGF0ZXNBbmRDaXRpZXMgPVxyXG4gIGZpbHRlcihzdGF0ZXMsIHN0YXRlID0+IHNvdXRoUmVnaW9uU3RhdGVzLmluZGV4T2Yoc3RhdGUuc3RhdGUpICE9PSAtMSk7XHJcbmNvbnN0IG5vcnRoUmVnaW9uU3RhdGVzQW5kQ2l0aWVzID1cclxuICBmaWx0ZXIoc3RhdGVzLCBzdGF0ZSA9PiBub3J0aFJlZ2lvblN0YXRlcy5pbmRleE9mKHN0YXRlLnN0YXRlKSAhPT0gLTEpO1xyXG5jb25zdCBub3J0aEVhc3RSZWdpb25TdGF0ZXNBbmRDaXRpZXMgPVxyXG4gIGZpbHRlcihzdGF0ZXMsIHN0YXRlID0+IG5vcnRoRWFzdFJlZ2lvblN0YXRlcy5pbmRleE9mKHN0YXRlLnN0YXRlKSAhPT0gLTEpO1xyXG5jb25zdCBtaWRkbGVFYXN0UmVnaW9uU3RhdGVzQW5kQ2l0aWVzID1cclxuICBmaWx0ZXIoc3RhdGVzLCBzdGF0ZSA9PiBtaWRkbGVFYXN0UmVnaW9uU3RhdGVzLmluZGV4T2Yoc3RhdGUuc3RhdGUpICE9PSAtMSk7XHJcblxyXG5jb25zdCBzb3V0aEVhc3RSZWdpb25EYXRhID0ge1xyXG4gIHJlZ2lvbk5hbWU6ICdTdWRlc3RlJyxcclxuICBzdGF0ZXM6IHNvdXRoRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IHNvdXRoUmVnaW9uRGF0YSA9IHtcclxuICByZWdpb25OYW1lOiAnU3VsJyxcclxuICBzdGF0ZXM6IHNvdXRoUmVnaW9uU3RhdGVzQW5kQ2l0aWVzLFxyXG59O1xyXG5cclxuY29uc3Qgbm9ydGhSZWdpb25EYXRhID0ge1xyXG4gIHJlZ2lvbk5hbWU6ICdOb3J0ZScsXHJcbiAgc3RhdGVzOiBub3J0aFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IG5vcnRoRWFzdFJlZ2lvbkRhdGEgPSB7XHJcbiAgcmVnaW9uTmFtZTogJ05vcmRlc3RlJyxcclxuICBzdGF0ZXM6IG5vcnRoRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IG1pZGRsZUVhc3RSZWdpb25EYXRhID0ge1xyXG4gIHJlZ2lvbk5hbWU6ICdDZW50cm8tT2VzdGUnLFxyXG4gIHN0YXRlczogbWlkZGxlRWFzdFJlZ2lvblN0YXRlc0FuZENpdGllcyxcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lvbnMgPSB7XHJcbiAgWydjZW50cm9vZXN0ZSddOiBtaWRkbGVFYXN0UmVnaW9uRGF0YSxcclxuICBub3JkZXN0ZTogbm9ydGhFYXN0UmVnaW9uRGF0YSxcclxuICBub3J0ZTogbm9ydGhSZWdpb25EYXRhLFxyXG4gIHN1ZGVzdGU6IHNvdXRoRWFzdFJlZ2lvbkRhdGEsXHJcbiAgc3VsOiBzb3V0aFJlZ2lvbkRhdGEsXHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVkQ2l0aWVzID0gbWFwKHN0YXRlcywgKHN0YXRlOiBzdGF0ZVR5cGUpID0+IHtcclxuICBjb25zdCBzdGF0ZUNpdGllc05vcm1hbGl6ZWQgPSBtYXAoc3RhdGUuY2l0aWVzLCBjaXR5ID0+IHJlbW92ZUFjY2VudHMoY2l0eS5yZXBsYWNlKC9cXHN8LXxfL2csICcnKS50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgcmV0dXJuIHsgLi4uc3RhdGUsIGNpdGllczogc3RhdGVDaXRpZXNOb3JtYWxpemVkIH07XHJcbn0pO1xyXG5cclxuY29uc3QgbWVtb2l6ZWRTdGF0ZXM6IG1lbW9pemVkU3RhdGVUeXBlID0ge307XHJcbmNvbnN0IG1lbW9pemVkQ2l0aWVzOiBtZW1vaXplZENpdHlUeXBlID0ge307XHJcbmNvbnN0IG1lbW9pemVkUmVnaW9uczogbWVtb2l6ZWRSZWdpb25XaXRoU3RhdGVUeXBlID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tJZlZhcmlhYmxlSXNCb29sZWFuID0gKHZhcmlhYmxlOiBib29sZWFuLCB2YXJpYWJsZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gIGlmICh2YXJpYWJsZSAhPT0gdHJ1ZSAmJiB2YXJpYWJsZSAhPT0gZmFsc2UpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHt2YXJpYWJsZU5hbWV9XCIgcGFyYW1ldGVyIHNob3VsZCBiZSBvZiBib29sZWFuIHR5cGVgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZFBhcmFtID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCByZXF1aXJlZFBhcmFtRXJyb3I6IEVycm9yID0gbmV3IEVycm9yKGBSZXF1aXJlZCBwYXJhbWV0ZXIsIFwiJHtwYXJhbX1cIiBpcyBtaXNzaW5nLmApO1xyXG4gIC8vIHByZXNlcnZlIG9yaWdpbmFsIHN0YWNrIHRyYWNlXHJcbiAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoXHJcbiAgICAgIHJlcXVpcmVkUGFyYW1FcnJvcixcclxuICAgICAgcmVxdWlyZWRQYXJhbSxcclxuICAgICk7XHJcbiAgfVxyXG4gIHRocm93IHJlcXVpcmVkUGFyYW1FcnJvcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxSZWdpb25zID0gKHtcclxuICAgIHNob3VsZFJldHVybkVudGlyZUpzb24gPSBmYWxzZSxcclxuICB9OiB7XHJcbiAgICBzaG91bGRSZXR1cm5FbnRpcmVKc29uOiBib29sZWFuLFxyXG4gIH0pOiByZWdpb25UeXBlW10gfCBzdHJpbmdbXSA9PiB7XHJcbiAgaWYgKHNob3VsZFJldHVybkVudGlyZUpzb24gPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignc2hvdWxkUmV0dXJuRW50aXJlSnNvbiBwcm9wZXJ0eSBjYW5ub3QgYmUgbnVsbCAnKTtcclxuICBjaGVja0lmVmFyaWFibGVJc0Jvb2xlYW4oc2hvdWxkUmV0dXJuRW50aXJlSnNvbiwgJ3Nob3VsZFJldHVybkVudGlyZUpzb24nKTtcclxuICBpZiAoc2hvdWxkUmV0dXJuRW50aXJlSnNvbikgcmV0dXJuIG1hcChyZWdpb25zLCByZWdpb24gPT4gcmVnaW9uKTtcclxuICByZXR1cm4gbWFwKHJlZ2lvbnMsIHJlZ2lvbiA9PiByZWdpb24ucmVnaW9uTmFtZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uID0gKHsgcmVnaW9uID0gcmVxdWlyZWRQYXJhbSgncmVnaW9uJykgfTogeyByZWdpb246IHN0cmluZ1tdIH0pOiByZWdpb25UeXBlW10gPT4ge1xyXG4gIGlmICghcmVnaW9uKSB0aHJvdyBuZXcgRXJyb3IoJ3JlZ2lvbiBwYXJhbWV0ZXIgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJlZ2lvbikpIHRocm93IG5ldyBFcnJvcigncmVnaW9uIHBhcmFtZXRlciBzaG91bGQgYmUgYW4gQXJyYXknKTtcclxuICByZXR1cm4gbWFwKHJlZ2lvbiwgc2luZ2xlUmVnaW9uID0+IHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRSZWdpb25OYW1lID0gcmVtb3ZlQWNjZW50cyhzaW5nbGVSZWdpb24ucmVwbGFjZSgvXFxzfC18Xy9nLCAnJykudG9Mb3dlckNhc2UoKSk7XHJcbiAgICByZXR1cm4gcmVnaW9uc1tub3JtYWxpemVkUmVnaW9uTmFtZV07XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVSZWdpb24gPSAoeyBzdGF0ZSA9IHJlcXVpcmVkUGFyYW0oJ3N0YXRlJykgfTogeyBzdGF0ZTogc3RyaW5nIH0pOiByZWdpb25UeXBlIHwge30gPT4ge1xyXG4gIGlmICghc3RhdGUpIHRocm93IG5ldyBFcnJvcignc3RhdGUgcHJvcGVydHkgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcigndmFyaWFibGUgc3RhdGUgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XHJcbiAgY29uc3QgbWVtb2l6ZWRTdGF0ZVJlZ2lvbiA9IG1lbW9pemVkUmVnaW9uc1tzdGF0ZV07XHJcbiAgaWYgKCFtZW1vaXplZFN0YXRlUmVnaW9uKSB7XHJcbiAgICBjb25zdCBmb3VuZFJlZ2lvbiA9IGZpbmQocmVnaW9ucywgcmVnaW9uID0+IGZpbmQocmVnaW9uLnN0YXRlcywgKHJlZ2lvblN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRTdGF0ZU5hbWUgPSByZW1vdmVBY2NlbnRzKHN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZykudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIHJldHVybiByZW1vdmVBY2NlbnRzKHJlZ2lvblN0YXRlLnN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZykudG9Mb3dlckNhc2UoKSkgPT09IG5vcm1hbGl6ZWRTdGF0ZU5hbWU7XHJcbiAgICB9KSk7XHJcbiAgICBpZiAoIWZvdW5kUmVnaW9uKSByZXR1cm4ge307XHJcbiAgICBtZW1vaXplZFJlZ2lvbnNbc3RhdGVdID0gZm91bmRSZWdpb247XHJcbiAgICByZXR1cm4gZm91bmRSZWdpb247XHJcbiAgfVxyXG4gIHJldHVybiBtZW1vaXplZFN0YXRlUmVnaW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENpdHlSZWdpb24gPSAoe1xyXG4gIGNpdHkgPSByZXF1aXJlZFBhcmFtKCdjaXR5JyksXHJcbiAgc2hvdWxkUmV0dXJuRW50aXJlSnNvbiA9IGZhbHNlLFxyXG59OiB7XHJcbiAgICBjaXR5OiBzdHJpbmcsXHJcbiAgICBzaG91bGRSZXR1cm5FbnRpcmVKc29uOiBib29sZWFuLFxyXG4gIH0pOiBzdHJpbmcgfCByZWdpb25UeXBlIHwgc3RhdGVUeXBlID0+IHtcclxuICBpZiAodHlwZW9mIGNpdHkgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ2NpdHkgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcnKTtcclxuICBpZiAodHlwZW9mIHNob3VsZFJldHVybkVudGlyZUpzb24gIT09ICdib29sZWFuJykgdGhyb3cgbmV3IEVycm9yKCdzaG91bGRSZXR1cm5FbnRpcmVKc29uIHBhcmFtZXRlciBtdXN0IGJlIGEgc3RyaW5nJyk7XHJcbiAgY29uc3QgbWVtb2l6ZWRDaXR5UmVnaW9uOiByZWdpb25XaXRoU3RhdGVUeXBlID0gbWVtb2l6ZWRSZWdpb25zW2NpdHldO1xyXG4gIGlmKCFtZW1vaXplZENpdHlSZWdpb24pIHtcclxuICAgIGNvbnN0IGZvdW5kUmVnaW9uID0gZmluZChyZWdpb25zLCByZWdpb24gPT4gZmluZCgocmVnaW9uLnN0YXRlcyBhcyBhbnkpLCBzdGF0ZSA9PiBzdGF0ZS5jaXRpZXMuaW5kZXhPZihjaXR5KSA+PSAwKSk7XHJcbiAgICBjb25zdCBbZm91bmRTdGF0ZV0gPSBmaWx0ZXIoZm91bmRSZWdpb24uc3RhdGVzLCBzdGF0ZSA9PiBzdGF0ZS5jaXRpZXMuaW5kZXhPZihjaXR5KSA+PSAwKTtcclxuICAgIGNvbnN0IGZvdW5kUmVnaW9uV2l0aENpdHlTdGF0ZSA9IHsgLi4uZm91bmRSZWdpb24sIGNpdHlTdGF0ZTogZm91bmRTdGF0ZSB9O1xyXG4gICAgbWVtb2l6ZWRSZWdpb25zW2NpdHldID0gZm91bmRSZWdpb25XaXRoQ2l0eVN0YXRlO1xyXG4gICAgaWYgKHNob3VsZFJldHVybkVudGlyZUpzb24pIHJldHVybiBmb3VuZFJlZ2lvbldpdGhDaXR5U3RhdGU7XHJcbiAgICByZXR1cm4gZm91bmRSZWdpb25XaXRoQ2l0eVN0YXRlLnJlZ2lvbk5hbWU7XHJcbiAgfVxyXG4gIGlmIChzaG91bGRSZXR1cm5FbnRpcmVKc29uKXJldHVybiBtZW1vaXplZENpdHlSZWdpb247XHJcbiAgcmV0dXJuIG1lbW9pemVkQ2l0eVJlZ2lvbi5yZWdpb25OYW1lO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBjaXRpZXMgb2YgdGhlIGdpdmVuIHN0YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZU9iamVjdCAtIFRoZSBvYmplY3QgdGhlIHRlbGxzIHRoZSBuYW1lIG9mIHRoZSBzdGF0ZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlT2JqZWN0LnN0YXRlIC0gVGhlIHN0YXRlIG5hbWUuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGNpdGllcyA9IGFwaS5nZXRTdGF0ZUNpdGllcyh7IHN0YXRlOiAnU8OjbyBQYXVsbycgfSk7XHJcbiAqIC8vIHsgc3RhdGU6ICdTw6NvIFBhdWxvJywgYWJicmV2aWF0aW9uOiAnc3AnLCBjaXRpZXM6IFsnU2FudG9zJywgJ1PDo28gVmljZW50ZScsICdHdWFydWrDoScsLi4uXSB9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVDaXRpZXMgPSAoeyBzdGF0ZSA9IHJlcXVpcmVkUGFyYW0oJ3N0YXRlJykgfTogeyBzdGF0ZTogc3RyaW5nIH0pOiBzdGF0ZVR5cGUgPT4ge1xyXG4gIGlmICghc3RhdGUpIHRocm93IG5ldyBFcnJvcignc3RhdGUgcHJvcGVydHkgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvciAoJ3N0YXRlIHByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcnKTtcclxuICBjb25zdCBub3JtYWxpemVkU3RhdGUgPSByZW1vdmVBY2NlbnRzKHN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGNvbnN0IG1lbW9pemVkU3RhdGU6IHN0YXRlVHlwZSA9IG1lbW9pemVkU3RhdGVzW25vcm1hbGl6ZWRTdGF0ZV07XHJcbiAgaWYgKG1lbW9pemVkU3RhdGUpIHtcclxuICAgIHJldHVybiBtZW1vaXplZFN0YXRlO1xyXG4gIH1cclxuICBjb25zdCBmaW5kU3RhdGVJbnN0YW50aWF0ZWQgPSBmaW5kU3RhdGUoc3RhdGUpO1xyXG4gIGNvbnN0IHN0YXRlRm91bmQ6IHN0YXRlVHlwZSB8IG51bGwgPSBmaW5kKHN0YXRlcywgZmluZFN0YXRlSW5zdGFudGlhdGVkKTtcclxuICBpZiAoc3RhdGVGb3VuZCkge1xyXG4gICAgbWVtb2l6ZWRTdGF0ZXNbbm9ybWFsaXplZFN0YXRlXSA9IHN0YXRlRm91bmQ7XHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZUZvdW5kO1xyXG59O1xyXG5cclxuY29uc3QgZmluZFN0YXRlID0gKHN0YXRlOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkU3RhdGUgPSByZW1vdmVBY2NlbnRzKHN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpO1xyXG4gIHJldHVybiAoZWxlbWVudCkgPT4gcmVtb3ZlQWNjZW50cyhlbGVtZW50LnN0YXRlLnJlcGxhY2UoL1xcc3wtfF8vZywgJycpLnRvTG93ZXJDYXNlKCkpID09PSBub3JtYWxpemVkU3RhdGUgfHwgZWxlbWVudC5hYmJyZXZpYXRpb24gPT09IG5vcm1hbGl6ZWRTdGF0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBjaXR5IG5hbWUgYW5kIHJldHVybnMgdGhlIGZ1bGwganNvbiBzdGF0ZVR5cGUgb2JqZWN0XHJcbiAqIG9yIG9ubHkgdGhlIG5hbWUgb2YgdGhlIHN0YXRlIGRlcGVuZGluZyBvbiBzaG91bGRSZXR1cm5FbnRpcmVKc29uIHByb3BlcnR5LlxyXG4gKiBJZiB0aGUgc3RhdGUgaXMgbm90IGZvdW5kLCBpdCByZXR1cm5zIGFuIGVtcHR5IG9iamVjdCBvciBhbiBlbXB0eSBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0aGUgdGVsbHMgdGhlIG5hbWUgb2YgdGhlIGNpdHkgYW5kIGlmIHRoZSByZXR1cm5cclxuICogc2hvdWxkIGJlIGFuIG9iamVjdCBvciBqdXN0IGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eU9iamVjdC5jaXR5IC0gVGhlIGNpdHkgbmFtZS5cclxuICogQHBhcmFtIHtib29sZWFufSBjaXR5T2JqZWN0LnNob3VsZFJldHVybkVudGlyZUpzb24gLSBUaGlzIHByb3BlcnR5IHRlbGxzIHRvIHRoZSBtZXRob2RcclxuICogdGhhdCB0aGUgcmV0dXJuIHNob3VsZCBvdSBzaG91bGQgbm90IGJlIHRoZSBmdWxsIHN0YXRlIG9iamVjdC5cclxuICogSWYgdGhlIHByb3BlcnR5IGlzIHRydWUsIGl0IHdpbGwgcmV0dXJuIHRoZSBlbnRpcmUgc3RhdGVUeXBlIG9iamVjdCxcclxuICogaWYgaXRzIGZhbHNlIG9yIG5vdCBzZXQsIGl0IHdpbGwgcmV0dXJuIGp1c3QgdGhlIHN0cmluZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBzdGF0ZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgY2l0aWVzID0gYXBpLmdldENpdHlTdGF0ZSh7IGNpdHk6ICdTYW50b3MnLCBzaG91bGRSZXR1cm5FbnRpcmVKc29uOiB0cnVlIH0pO1xyXG4gKiAvLyB7IHN0YXRlOiAnU8OjbyBQYXVsbycsIGFiYnJldmlhdGlvbjogJ3NwJywgY2l0aWVzOiBbJ1NhbnRvcycsICdTw6NvIFZpY2VudGUnLCAnR3VhcnVqw6EnLC4uLl0gfVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjaXRpZXMgPSBhcGkuZ2V0Q2l0eVN0YXRlKHsgY2l0eTogJ1NhbnRvcycgfSk7XHJcbiAqIC8vICdTw6NvIFBhdWxvJ1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjaXRpZXMgPSBhcGkuZ2V0Q2l0eVN0YXRlKHsgY2l0eTogJ1NhbnRvcycsIHNob3VsZFJldHVybkVudGlyZUpzb246IGZhbHNlIH0pO1xyXG4gKiAvLyAnU8OjbyBQYXVsbycsXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGNpdGllcyA9IGFwaS5nZXRDaXR5U3RhdGUoeyBjaXR5OiAncmFuZG9tQ2l0eScgfSk7XHJcbiAqIC8vICcnXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGNpdGllcyA9IGFwaS5nZXRDaXR5U3RhdGUoeyBjaXR5OiAncmFuZG9tQ2l0eScgLCBzaG91bGRSZXR1cm5FbnRpcmVKc29uOiBmYWxzZX0pO1xyXG4gKiAvLyAnJ1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjaXRpZXMgPSBhcGkuZ2V0Q2l0eVN0YXRlKHsgY2l0eTogJ3JhbmRvbUNpdHknLCBzaG91bGRSZXR1cm5FbnRpcmVKc29uOiB0cnVlIH0pO1xyXG4gKiAvLyB7fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENpdHlTdGF0ZSA9ICh7XHJcbiAgY2l0eSA9IHJlcXVpcmVkUGFyYW0oJ2NpdHknKSxcclxuICBzaG91bGRSZXR1cm5FbnRpcmVKc29uID0gZmFsc2UsXHJcbn06IHtcclxuICBjaXR5OiBzdHJpbmcsXHJcbiAgc2hvdWxkUmV0dXJuRW50aXJlSnNvbj86IGJvb2xlYW4sXHJcbn0pOiBzdHJpbmcgfCBzdGF0ZVR5cGUgfCB7fSA9PiB7XHJcbiAgY2hlY2tJZlZhcmlhYmxlSXNCb29sZWFuKHNob3VsZFJldHVybkVudGlyZUpzb24sICdzaG91bGRSZXR1cm5FbnRpcmVKc29uJyk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZENpdHkgPSByZW1vdmVBY2NlbnRzKGNpdHkucmVwbGFjZSgvXFxzfC18Xy9nLCAnJykudG9Mb3dlckNhc2UoKSk7XHJcbiAgY29uc3QgbWVtb2l6ZWRDaXR5ID0gbWVtb2l6ZWRDaXRpZXNbbm9ybWFsaXplZENpdHldO1xyXG4gIGlmIChtZW1vaXplZENpdHkpIHJldHVybiBzaG91bGRSZXR1cm5FbnRpcmVKc29uID8gbWVtb2l6ZWRDaXR5IDogbWVtb2l6ZWRDaXR5LnN0YXRlO1xyXG4gIGNvbnN0IGZpbmRDaXR5ID0gKGVsZW1lbnQ6IHN0YXRlVHlwZSk6IGJvb2xlYW4gPT4gZWxlbWVudC5jaXRpZXMuaW5kZXhPZihub3JtYWxpemVkQ2l0eSkgPj0gMDtcclxuICBjb25zdCBzdGF0ZTogc3RhdGVUeXBlID0gZmluZChub3JtYWxpemVkQ2l0aWVzLCBmaW5kQ2l0eSk7XHJcbiAgaWYgKCFzdGF0ZSkgcmV0dXJuIHNob3VsZFJldHVybkVudGlyZUpzb24gPyB7fSA6ICcnO1xyXG4gIGNvbnN0IHN0YXRlSW5kZXggPSBub3JtYWxpemVkQ2l0aWVzLmluZGV4T2Yoc3RhdGUpO1xyXG4gIGNvbnN0IHJlYWxTdGF0ZSA9IHN0YXRlc1tzdGF0ZUluZGV4XTtcclxuICBtZW1vaXplZENpdGllc1tub3JtYWxpemVkQ2l0eV0gPSByZWFsU3RhdGU7XHJcbiAgaWYgKHNob3VsZFJldHVybkVudGlyZUpzb24pIHJldHVybiByZWFsU3RhdGU7XHJcbiAgcmV0dXJuIHJlYWxTdGF0ZS5zdGF0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IG1lbW9pemUgYWxsIHRoZSBzdGF0ZXMgYW5kIGNpdGllcywgZG9pbmcgaXQgZWFnZXJseS5cclxuICogQGV4YW1wbGVcclxuICogZWFnZXJNZW1vaXphdGlvbigpO1xyXG4gKiAvLyBVc2luZyBpdCB3aWxsIG1lbW9pemUgZXZlcnl0aGluZywgbWFraW5nIGFwaS5nZXRDaXR5U3RhdGUgYW5kIGFwaS5nZXRTdGF0ZUNpdGllcyBmYXN0ZXJcclxuICovXHJcbmV4cG9ydCBjb25zdCBlYWdlck1lbW9pemF0aW9uID0gKCk6IHZvaWQgPT4ge1xyXG4gIGZvckVhY2goc3RhdGVzLCAoc3RhdGU6IHN0YXRlVHlwZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFN0YXRlTmFtZSA9IHJlbW92ZUFjY2VudHMoc3RhdGUuc3RhdGUucmVwbGFjZSgvXFxzfC18Xy9nKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIG1lbW9pemVkU3RhdGVzW25vcm1hbGl6ZWRTdGF0ZU5hbWVdID0gc3RhdGU7XHJcbiAgICBmb3JFYWNoKHN0YXRlLmNpdGllcywgKGNpdHk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkQ2l0eU5hbWUgPSByZW1vdmVBY2NlbnRzKGNpdHkucmVwbGFjZSgvXFxzfC18Xy9nKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgbWVtb2l6ZWRDaXRpZXNbbm9ybWFsaXplZENpdHlOYW1lXSA9IHN0YXRlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==