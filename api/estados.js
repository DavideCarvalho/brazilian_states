/*jshint esversion: 6 */  
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

api.mostraCidadeEstado = function(req,res){
  "use strict"; 
  console.log(req.params.uf);

  let estado = req.params.uf;
  switch(estado){
    case 'acre':
    res.json(ac);
    break;
    case 'ac':
    res.json(ac);
    break;
    case 'alagoas':
    res.json(al);
    break;
    case 'al':
    res.json(al);
    break;
    case 'amazonas':
    res.json(am);
    break;
    case 'am':
    res.json(am);
    break;
    case 'amapa':
    res.json(ap);
    break;
    case 'ap':
    res.json(ap);
    break;
    case 'bahia':
    res.json(ba);
    break;
    case 'ba':
    res.json(ba);
    break;
    case 'ceara':
    res.json(ce);
    break;
    case 'ce':
    res.json(ce);
    break;
    case 'distritofederal':
    res.json(df);
    break;
    case 'df':
    res.json(df);
    break;
    case 'espiritosanto':
    res.json(es);
    break;
    case 'es':
    res.json(es);
    break;
    case 'goiania':
    res.json(go);
    break;
    case 'go':
    res.json(go);
    break;
    case 'maranhao':
    res.json(ma);
    break;
    case 'ma':
    res.json(ma);
    break;
    case 'minasgerais':
    res.json(mg);
    break;
    case 'mg':
    res.json(mg);
    break;
    case 'matogrossodosul':
    res.json(ms);
    break;
    case 'ms':
    res.json(ms);
    break;
    case 'matogrosso':
    res.json(mt);
    break;
    case 'mt':
    res.json(mt);
    break;
    case 'para':
    res.json(pa);
    break;
    case 'pa':
    res.json(pa);
    break;
    case 'paraiba':
    res.json(pb);
    break;
    case 'pb':
    res.json(pb);
    break;
    case 'pernambuco':
    res.json(pe);
    break;
    case 'pe':
    res.json(pe);
    break;
    case 'piaui':
    res.json(pi);
    break;
    case 'pi':
    res.json(pi);
    break;
    case 'parana':
    res.json(pr);
    break;
    case 'pr':
    res.json(pr);
    break;
    case 'riodejaneiro':
    res.json(rj);
    break;
    case 'rj':
    res.json(rj);
    break;
    case 'riograndedonorte':
    res.json(rn);
    break;
    case 'rn':
    res.json(rn);
    break;
    case 'rondonia':
    res.json(ro);
    break;
    case 'ro':
    res.json(ro);
    break;
    case 'roraima':
    res.json(rr);
    break;
    case 'rr':
    res.json(rr);
    break;
    case 'riograndedosul':
    res.json(rs);
    break;
    case 'rs':
    res.json(rs);
    break;
    case 'santacatarina':
    res.json(sc);
    break;
    case 'sc':
    res.json(sc);
    break;
    case 'sergipe':
    res.json(se);
    break;
    case 'se':
    res.json(se);
    break;
    case 'saopaulo':
    res.json(sp);
    break;
    case 'sp':
    res.json(sp);
    break;
    case 'tocantins':
    res.json(to);
    break;
    case 'to':
    res.json(to);
    break;
    default:
    res.send('Não é um estado válido').status(400);
  }
};

module.exports = api;
