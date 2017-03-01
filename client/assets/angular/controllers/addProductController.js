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
      console.log('returned from the product factory with the created product_data',product_data.data);
      if(product_data.data.errors){
        $scope.errors = product_data.data.errors
      } else {
        console.log('no errors, about to add product to company',product_data.data);
        companyFactory.addProduct(product_data.data, function(company_data){
          console.log('returned from the company factory with the updated company'.company_data);
          if(company_data.data.errors){
            console.log('there was an error',company_data.data.errors);
            $scope.errors = company_data.data.errors
          } else {
            console.log('no problems updating company',company_data.data);
            $location.url('/add_order/'+$scope.company._id)
          }
        })

      }
    })
  }
}]);
