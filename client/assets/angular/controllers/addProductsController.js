console.log("Loading Clientside addProductsController.js");

app.controller('addProductsController', ['$scope', '$location', 'productFactory','companyFactory','orderFactory','$routeParams', '$cookieStore', function ($scope, $location, productFactory, companyFactory, orderFactory, $routeParams, $cookieStore) {
  // Initialize Required Attributes

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
    if ($scope.order.buyPrice == undefined){
      console.log('no products selected');
      return
    }
    for (var i = 0; i < $scope.products.length; i++) {
      $scope.products[i].buyPrice = $scope.order.buyPrice[i]
      $scope.products[i].quantity = $scope.order.quantity[i]
    }
    $scope.order.products = $scope.products
    $scope.order.buyPrice
    // console.log($scope.order);
    console.log('clicked confirm order',$scope.order);
    // orderFactory.giveOrder($scope.order)
  }
  console.log($cookieStore.get('user_id'))

}]);
