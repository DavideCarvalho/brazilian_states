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

const states = {
  acre: ac,
  ac: ac,
  alagoas: al,
  al: al,
  amazonas: am,
  am: am,
  amapa: ap,
  ap: ap,
  bahia: ba,
  ba: ba,
  ceara: ce,
  ce: ce,
  distritofederal: df,
  df: df,
  espiritosanto: es,
  es: es,
  goiania: go,
  go: go,
  maranhao: ma,
  ma: ma,
  minasgerais: mg,
  mg: mg,
  matogrosso: mt,
  mt: mt,
  para: pa,
  pa: pa,
  paraiba: pb,
  pb: pb,
  piaui: pi,
  pi: pi,
  parana: pr,
  pr: pr,
  riodejaneiro: rj,
  rj: rj,
  riograndedonorte: rn,
  rn: rn,
  rondonia: ro,
  ro: ro,
  roraima: rr,
  rr: rr,
  riograndedosul: rs,
  rs: rs,
  santacatarina: sc,
  sc: sc,
  sergipe: se,
  se: se,
  saopaulo: sp,
  sp: sp,
  tocantins: to,
  to: to
}

api.getStateCitiesRoute = (req,res) => {
  let state = api.getCities({state: req.params.uf});
  state ? res.json(state) : res.json({error: 'Not a valid state'}).status(400);
};

api.renderStatesDocumentation = (req,res) => {
  res.render('estados_endpoint');
}

// api.getCities({
//   state = requiredParam('state')
// } = {}) {
//   return states[state]
// }

api.getCities = ({
  state = requiredParam('state'),
}) => {
  return states[state];
}


const requiredParam = (param) => {
  const requiredParamError = new Error(
   `Required parameter, "${param}" is missing.`
  );
  // preserve original stack trace
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(
      requiredParamError, 
      requiredParam
    )
  };
  throw requiredParamError;
}

module.exports = api;
