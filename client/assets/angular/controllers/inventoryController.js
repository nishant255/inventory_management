console.log("Loading Clientside inventoryController.js");

app.controller('inventoryController', ['$scope', '$location', '$cookieStore', 'userFactory',function ($scope, $location, $cookieStore, userFactory) {

  // Initialize Required Attributes
  $scope.products = [
    {
      _id: 12,
      name: 'pizza',
      buyPrice: 50,
      sellPrice: 9020,
      quantity: 42,
      _company: {name: "Pete's Pizzas"}
    },
    {
      _id: 42,
      name: 'burger',
      buyPrice: 100,
      sellPrice: 150,
      quantity: 32,
      _company: {name: "Bob's Burgers"}
    }
  ];
  $scope.sortType = 'name';
  $scope.sortReverse = true;
  $scope.search = '';

  var _this = this;

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
  $scope.show = function(product){
    $location.url('/products/'+product._id);
  }
}]);
