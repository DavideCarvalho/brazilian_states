/*jshint esversion: 6 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
  var app = express();

  app.use(bodyParser.json());
  
  consign()
  .include('api')
  .then('routes')
  .into(app);

  return app;
};
