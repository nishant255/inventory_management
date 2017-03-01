console.log("Loading Clientside orderController.js");

app.controller('orderController', ['$scope', '$location', 'orderFactory', function ($scope, $location, orderFactory) {

  // Initialize Required Attributes
  $scope.order;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  orderFactory.findOrder(id, function(returned_data){
    $scope.order = returned_data;
  })
}]);
