'use strict';

module.exports = app => {

  app.route('/state').get(app.api.estados.renderStatesDocumentation);

  app.route('/state/:uf').get(app.api.estados.getStateCitiesRoute);

  app.route('/city/:cityName').get(app.api.estados.getCityStatesRoute);
};