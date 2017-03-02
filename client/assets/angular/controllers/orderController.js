console.log("Loading Clientside orderController.js");

app.controller('orderController', ['$scope', '$location', 'orderFactory', '$cookieStore',function ($scope, $location, orderFactory, $cookieStore) {

  // Initialize Required Attributes
  $scope.order;

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
  orderFactory.findOrder(id, function(returned_data){
    $scope.order = returned_data;
  })
}]);
