console.log("Loading routes.js");
var path         = require('path'),
    companies = require('./../controllers/companies.js');
    userController = require('./../controllers/userController.js');
    products = require('./../controllers/products.js');
    orders = require('./../controllers/orders.js');


  // Create User Route



module.exports = function (app) {
  app.get('/companies/:company_id', companies.findCompany);
  app.post('/companies/:company_id/addProduct', companies.addProduct);
  app.get('/companies/:id', companies.show);
  app.get('/companies', companies.index);
  app.post('/companies', companies.create);

  app.get('/users', userController.getAllUser);
  app.get('/user/getUser/:id', userController.getUser);
  app.get('/user/makeAdmin/:id', userController.makeAdmin);
  app.post('/user', userController.createUser);
  app.post('/user_login', userController.loginUser);
  app.get('/products/:id', products.show);
  app.get('/products', products.index);
  app.post('/products', products.create);

  app.get('/orders/:id', orders.show);
  app.get('/orders', orders.index);
  app.post('/orders', orders.create);
};
