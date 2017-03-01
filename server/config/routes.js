console.log("Loading routes.js");
var path         = require('path'),
    companies = require('./../controllers/companies.js');

module.exports = function (app) {
  app.get('/companies', companies.index)
  app.post('/companies', companies.create)
};
