console.log("Loading Clientside addProductController.js");

app.controller('addProductController', ['$scope', '$location', 'productFactory','companyFactory','$routeParams', function ($scope, $location, productFactory, companyFactory,$routeParams) {

  // Initialize Required Attributes

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------

  companyFactory.findCompany($routeParams.company_id,function(company){
    console.log('returned from the controller with the company',company.data);
    $scope.company = company.data
  })
  $scope.create = function(){
    console.log('you clicked create',$scope.product);
    productFactory.create($scope.product,$scope.company, function(product_data){
      console.log('returned from the product factory with the created product',product_data.data);
    })
  }
}]);
