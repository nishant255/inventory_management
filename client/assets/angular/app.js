console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config( function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController'
    })

    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController'
    })

    .when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: 'inventoryController',
      controllerAs: 'IC'
    })

    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'ordersController'
    })

    .when('/companies', {
      templateUrl: 'partials/companies.html',
      controller: 'companiesController'
    })

    .otherwise({
      redirectTo: '/'
    });

});
