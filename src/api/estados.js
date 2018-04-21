// @flow
const _ = require('lodash');

const api = {};

const ac: stateType = require('./estados/acre.js');
const al: stateType = require('./estados/alagoas.js');
const am: stateType = require('./estados/amazonas.js');
const ap: stateType = require('./estados/amapa.js');
const ba: stateType = require('./estados/bahia.js');
const ce: stateType = require('./estados/ceara.js');
const df: stateType = require('./estados/df.js');
const es: stateType = require('./estados/espiritosanto.js');
const go: stateType = require('./estados/goiania.js');
const ma: stateType = require('./estados/maranhao.js');
const mg: stateType = require('./estados/minasgerais.js');
const ms: stateType = require('./estados/matogrossodosul.js');
const mt: stateType = require('./estados/matogrosso.js');
const pa: stateType = require('./estados/para.js');
const pb: stateType = require('./estados/paraiba.js');
const pi: stateType = require('./estados/piaui.js');
const pr: stateType = require('./estados/parana.js');
const rj: stateType = require('./estados/riodejaneiro.js');
const rn: stateType = require('./estados/riograndedonorte.js');
const ro: stateType = require('./estados/rondonia.js');
const rr: stateType = require('./estados/roraima.js');
const rs: stateType = require('./estados/riograndedosul.js');
const sc: stateType = require('./estados/santacatarina.js');
const se: stateType = require('./estados/sergipe.js');
const sp: stateType = require('./estados/saopaulo.js');
const to: stateType = require('./estados/tocantins.js');

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
];

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

api.getStateCitiesRoute = (req: express$Request, res: express$Response) => {
  const state = api.getCities({ state: req.params.uf });
  if (state) { 
    res.json(state);
  } else { 
    res.json({ error: 'Not a valid state' }).status(400);
  }
};

api.getCityStatesRoute = (req: express$Request, res: express$Response) => {
  const returnEntireJson = !!req.query.returnEntireJson;
  const state = api.getCityFromState({ city: req.params.cityName, returnEntireJson });
  if (state) {
    res.json(state);
  } else {
    res.json({ error: 'Not a valid city name' }).status(400);
  }
};

api.renderStatesDocumentation = (req: express$Request, res: express$Response) => {
  res.render('estados_endpoint');
};

api.getCities = ({
  state = requiredParam('state'),
}: { state: string }): void | stateType => _.find(states, (element: stateType): boolean => element.state === state || element.abbreviation === state);

api.getCityFromState = ({
  city = requiredParam('city'),
  returnEntireJson = false,
}: {city: string, returnEntireJson: boolean}): stateType | string | {} => {
  const state: void | stateType = _.find(states, (element: stateType) => element.cities.indexOf(city) >= 0);
  if (!state) {
    // { return returnEntireJson ? {} : ''; }
    let returnValue;
    if (returnEntireJson) {
      returnValue = {};
    } else {
      returnValue = '';
    }
    return returnValue;
  }
  return returnEntireJson ? state : state.state;
};

module.exports = api;
