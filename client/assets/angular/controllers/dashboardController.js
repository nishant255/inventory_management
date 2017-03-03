console.log("Loading Clientside dashboardController.js");

app.controller('dashboardController', ['$scope', '$location', 'productFactory', 'userFactory', 'orderFactory', '$cookieStore',  function ($scope, $location, productFactory, userFactory, orderFactory, $cookieStore) {

  var _this = this;
  $scope.orders = []
  $scope.products = []
  $scope.isReversed = true
  // _this.currentUser = {};

  // -------------------------------------------------------------------------
  //                            Check Logged In User
  // -------------------------------------------------------------------------
  var CheckingUser = function () {
    if (!$cookieStore.get('logged-in')) {
      console.log("Not Logged In");
      $location.url('/');
    } else {
      console.log("logged in");
    }
  };
  CheckingUser();

  // -------------------------------------------------------------------------
  //                            Log Out User
  // -------------------------------------------------------------------------
  _this.logout = function () {
    userFactory.logout(function (factoryResponse) {
      console.log(factoryResponse);
    });
  };

  // -------------------------------------------------------------------------
  //                            Get CurrentUser
  // -------------------------------------------------------------------------
  var getCurrentUser = function () {
    userFactory.getUser(function (currentUser) {
      _this.currentUser = currentUser;
    });
  };
  getCurrentUser();
  orderFactory.index(function(orders){
    $scope.orders = orders.data
  })
  productFactory.index(function(products){
    $scope.products = products.data
  })
}]);
