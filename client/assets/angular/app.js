console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config( function ($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      controllerAs: 'LC'
    })

    .when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: 'inventoryController',
      controllerAs: 'IC'
    })

    .otherwise({
      redirectTo: '/'
    });

});
