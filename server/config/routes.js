console.log("Loading routes.js");
var path         = require('path'),
    companies = require('./../controllers/companies.js');
    products = require('./../controllers/products.js');
    orders = require('./../controllers/orders.js');

module.exports = function (app) {
  app.get('/companies/:id', companies.show)
  app.get('/companies', companies.index);
  app.post('/companies', companies.create);

  app.get('/products/:id', products.show);
  app.get('/products', products.index);
  app.post('/products', products.create);

  app.get('/orders/:id', orders.show);
  app.get('/orders', orders.index);
  app.post('/orders', orders.create);
};
