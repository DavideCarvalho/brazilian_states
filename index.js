const api = require('./lib/api/estados');

const npmPackage = {
  getStateCities: api.getStateCities,
  getCityState: api.getCityState,
};

module.exports = npmPackage;
