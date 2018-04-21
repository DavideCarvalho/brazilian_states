const api = require('./src/api/estados');

const npmPackage = {
  getStateCities: api.getStateCities,
  getCityState: api.getCityState,
};

module.exports = npmPackage;
