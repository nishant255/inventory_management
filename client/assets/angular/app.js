console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config( function ($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'DC'
    })
    .when('/add_order', {
      templateUrl: 'partials/add_order.html',
      controller: 'addOrderController',
      controllerAs: 'AOC'
    })
    .when('/add_company', {
      templateUrl: 'partials/add_company.html',
      controller: 'addCompanyController',
      controllerAs: 'ACC'
    })
    .when('/add_order/:company_id', {
      templateUrl: 'partials/add_products.html',
      controller: 'addProductsController',
      controllerAs: 'APC'
    })

    .otherwise({
      redirectTo: '/'
    });

});
