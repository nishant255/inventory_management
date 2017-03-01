console.log("Loading routes.js");
var path         = require('path'),
    companies = require('./../controllers/companies.js');
    products = require('./../controllers/products.js');

module.exports = function (app) {
  app.get('/companies', companies.index)
  app.get('/companies/:company_id', companies.findCompany)
  app.post('/companies/:company_id/addProduct', companies.addProduct)
  app.post('/companies', companies.create)
  app.post('/products', products.create)
};
