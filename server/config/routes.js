console.log("Loading routes.js");
var path         = require('path'),
    companies = require('./../controllers/companies.js');
    userController = require('./../controllers/userController.js');

module.exports = function (app) {

  // Create User Route
  app.post('/user', userController.createUser);


  app.get('/companies', companies.index);
  app.post('/companies', companies.create);
};
