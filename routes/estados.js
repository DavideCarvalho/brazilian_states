module.exports = (app) => app.get('/estado/:uf', app.api.estados.mostraCidadeEstado)
