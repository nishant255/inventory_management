console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config( function ($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'DC'
    })

    .otherwise({
      redirectTo: '/'
    });

});
