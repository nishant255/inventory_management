console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngCookies']);

app.config( function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      controllerAs: 'LC'
    })

    .when('/admindashboard', {
      templateUrl: 'partials/adminDashboard.html',
      controller: 'adminDashboardController'
    })

    .when('/userdashboard', {
      templateUrl: 'partials/userDashboard.html',
      controller: 'userDashboardController'
    })

    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      controllerAs: 'RC'
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
    .when('/add_order', {
      templateUrl: 'partials/add_order.html',
      controller: 'addOrderController',
      controllerAs: 'AOC'
    })
    .when('/add_company', {
      templateUrl: 'partials/add_company.html',
      controller: 'addCompanyController',
    })
    .when('/add_order/:company_id', {
      templateUrl: 'partials/add_products.html',
      controller: 'addProductsController',
    })
    .when('/add_product/:company_id', {
      templateUrl: 'partials/add_product.html',
      controller: 'addProductController',
    })

    .when('/products/:id', {
      templateUrl: 'partials/product.html',
      controller: 'productController'
    })

    .when('/orders/:id', {
      templateUrl: 'partials/order.html',
      controller: 'orderController'
    })

    .when('/companies/:id', {
      templateUrl: 'partials/company.html',
      controller: 'companyController'
    })

    .otherwise({
      redirectTo: '/'
    });

});
