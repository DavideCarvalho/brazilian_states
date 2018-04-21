module.exports = () => {
  const express = require('express');
  const consign = require('consign');
  const bodyParser = require('body-parser');
  var app = express();

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  })

  app.set('view engine', 'ejs');

  consign()
  .include('api')
  .then('routes')
  .into(app);

  return app;
};
