console.log("Loading routes.js");
var path         = require('path'),
    companies = require('./../controllers/companies.js');
<<<<<<< HEAD
    userController = require('./../controllers/userController.js');

module.exports = function (app) {

  // Create User Route
  app.post('/user', userController.createUser);


  app.get('/companies', companies.index);
  app.post('/companies', companies.create);
=======
    products = require('./../controllers/products.js');
    orders = require('./../controllers/orders.js');

module.exports = function (app) {
  app.get('/companies/:company_id', companies.findCompany)
  app.post('/companies/:company_id/addProduct', companies.addProduct)
  app.get('/companies/:id', companies.show)
  app.get('/companies', companies.index);
  app.post('/companies', companies.create);

  app.get('/products/:id', products.show);
  app.get('/products', products.index);
  app.post('/products', products.create);

  app.get('/orders/:id', orders.show);
  app.get('/orders', orders.index);
  app.post('/orders', orders.create);
>>>>>>> 039cd908d7191ececc12e49301940d84ac1509cd
};
