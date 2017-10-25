module.exports = (app) => {

  app.route('/estado')
  .get(app.api.estados.renderEstadosDocumentacao);

  app.route('/estado/:uf')
  .get(app.api.estados.mostraCidadeEstado);
};