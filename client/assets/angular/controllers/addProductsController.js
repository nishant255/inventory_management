console.log("Loading Clientside addProductsController.js");

app.controller('addProductsController', ['$scope', '$location', 'productFactory','companyFactory','$routeParams', '$cookieStore', function ($scope, $location, productFactory, companyFactory,$routeParams, $cookieStore) {

  // Initialize Required Attributes
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
  $scope.products = []
  $scope.order = {}

  companyFactory.findCompany($routeParams.company_id,function(company){
    console.log('returned from the controller with the company',company.data);
    $scope.company = company.data
  })

  $scope.start = function(){
    console.log('you clicked Add to order with this product',$scope.product);
    // $scope.products.push($scope.order.product)
    if($scope.product == undefined){
      console.log('did not select a product');
      return
    }
    var contains = false
    if($scope.products.length == 0){
      $scope.products.push($scope.product)
    }
    for (var i = 0; i < $scope.products.length; i++) {
      if($scope.product==$scope.products[i]){
        contains = true
      }
    }
    if(contains == false){
      $scope.products.push($scope.product)
    }
  }
  $scope.confirmOrder = function(){
    console.log('clicked confirm order',$scope.order);

  }
}]);
