console.log("Loading Clientside addProductsController.js");

app.controller('addProductsController', ['$scope', '$location', 'productFactory','companyFactory','$routeParams', function ($scope, $location, productFactory, companyFactory,$routeParams) {

  // Initialize Required Attributes

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------

  companyFactory.findCompany($routeParams.company_id,function(company){
    console.log('returned from the controller with the company',company.data);
    $scope.company = company.data
  })
}]);
