const api = require('./api/estados');

const npmPackage = {
  getCitiesFromState: api.getCities,
  getStateFromCity: api.getStateFromCity,
};

module.exports = npmPackage;
