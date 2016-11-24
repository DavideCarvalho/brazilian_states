module.exports = (app) => {
  const api = app.api.estados;

  app.get('/estado/:uf', api.mostraCidadeEstado);
};
