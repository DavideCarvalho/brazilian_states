const api = require('./src/api/estados');

const npmPackage = {
  getCitiesFromState: api.getCities,
  getStateFromCity: api.getStateFromCity,
};

module.exports = npmPackage;
