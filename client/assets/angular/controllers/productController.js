console.log("Loading Clientside productController.js");

app.controller('productController', ['$scope', '$location', 'productFactory','$cookieStore', function ($scope, $location, productFactory, $cookieStore) {

  // Initialize Required Attributes
  $scope.product;
  // -------------------------------------------------------------------------
  //                            Check Logged In User
  // -------------------------------------------------------------------------
  var CheckingUser = function () {
    if (!$cookieStore.get('logged-in')) {
      console.log("Not Logged In");
      $location.url('/');
    } else {
      console.log("logged in");

      console.log($cookieStore.get('user_id'));
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
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  productFactory.findProduct(id, function(returned_data){
    $scope.product = returned_data;
  });
}]);
