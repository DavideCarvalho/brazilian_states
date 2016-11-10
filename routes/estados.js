module.exports = function(app){
  var api = app.api.estados;

  app.get('/estado/:uf', api.mostraCidadeEstado);
};
