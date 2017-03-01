console.log("Loading Clientside addOrderController.js");

app.controller('addOrderController', ['$scope', '$location', 'productFactory','companyFactory', function ($scope, $location, productFactory, companyFactory) {

  // Initialize Required Attributes

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  $scope.companies = []
  companyFactory.index(function(companies){
    console.log('returned from the controller with the companies',companies.data);
    $scope.companies = companies.data
  })
  $scope.start = function(){
    console.log('got to addOrderController with company',$scope.order);
    $location.url(`/add_order/${$scope.order.company._id}`)
  }
}]);
