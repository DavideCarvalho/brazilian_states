const _ = require('lodash');

const api = {};

const ac = require('./estados/acre.js');
const al = require('./estados/alagoas.js');
const am = require('./estados/amazonas.js');
const ap = require('./estados/amapa.js');
const ba = require('./estados/bahia.js');
const ce = require('./estados/ceara.js');
const df = require('./estados/df.js');
const es = require('./estados/espiritosanto.js');
const go = require('./estados/goiania.js');
const ma = require('./estados/maranhao.js');
const mg = require('./estados/minasgerais.js');
const ms = require('./estados/matogrossodosul.js');
const mt = require('./estados/matogrosso.js');
const pa = require('./estados/para.js');
const pb = require('./estados/paraiba.js');
const pi = require('./estados/piaui.js');
const pr = require('./estados/parana.js');
const rj = require('./estados/riodejaneiro.js');
const rn = require('./estados/riograndedonorte.js');
const ro = require('./estados/rondonia.js');
const rr = require('./estados/roraima.js');
const rs = require('./estados/riograndedosul.js');
const sc = require('./estados/santacatarina.js');
const se = require('./estados/sergipe.js');
const sp = require('./estados/saopaulo.js');
const to = require('./estados/tocantins.js');

const states = [ac, al, am, ap, ba, ce, df, es, go, ma, mg, ms, mt, pa, pb, pi, pr, rj, rn, ro, rr, rs, sc, se, sp, to];

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

api.getStateCitiesRoute = (req, res) => {
  const state = api.getStateCities({ state: req.params.uf });
  if (state) {
    res.json(state);
  } else {
    res.json({ error: 'Not a valid state' }).status(400);
  }
};

api.getCityStatesRoute = (req, res) => {
  const { query: { returnEntireJson } } = req;
  const { params: { cityName } } = req;
  const shouldReturnEntireJson = returnEntireJson === 'true' ? Boolean('true') : Boolean();
  const state = api.getCityState({ city: cityName, shouldReturnEntireJson });
  if (state) {
    res.json(state);
  } else {
    res.json({ error: 'Not a valid city name' }).status(400);
  }
};

api.renderStatesDocumentation = (req, res) => {
  res.render('estados_endpoint');
};

api.getStateCities = ({ state = requiredParam('state') }) => {
  const findState = element => element.state === state || element.abbreviation === state;
  const memoizedState = memoizedStates[state];
  if (memoizedState) {
    return memoizedState;
  }
  const stateFound = _.find(states, findState);
  if (stateFound) {
    memoizedStates[state] = stateFound;
  }
  return stateFound;
};

api.getCityState = ({ city = requiredParam('city'), shouldReturnEntireJson = false }) => {
  const memoizedCity = memoizedCities[city];
  if (memoizedCity) {
    return shouldReturnEntireJson ? memoizedCity : memoizedCity.state;
  }
  const findCity = element => element.cities.indexOf(city) >= 0;
  const state = _.find(states, findCity);
  if (!state) {
    return shouldReturnEntireJson ? {} : '';
  }
  memoizedCities[city] = state;
  return shouldReturnEntireJson ? state : state.state;
};

module.exports = api;