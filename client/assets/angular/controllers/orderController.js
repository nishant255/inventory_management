console.log("Loading Clientside orderController.js");

app.controller('orderController', ['$scope', '$location', 'orderFactory', '$cookieStore',function ($scope, $location, orderFactory, $cookieStore) {

  // Initialize Required Attributes
  $scope.order;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  orderFactory.findOrder(id, function(returned_data){
    $scope.order = returned_data;
  })
}]);
