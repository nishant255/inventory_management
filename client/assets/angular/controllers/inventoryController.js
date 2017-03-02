console.log("Loading Clientside inventoryController.js");

app.controller('inventoryController', ['$scope', '$location', '$cookieStore',function ($scope, $location, $cookieStore) {

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

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  $scope.show = function(product){
    $location.url('/products/'+product._id);
  }
}]);
