console.log("Loading Clientside addProductsController.js");

app.controller('addProductsController', ['$scope', '$location', 'productFactory','companyFactory','orderFactory','userFactory','$routeParams', '$cookieStore', function ($scope, $location, productFactory, companyFactory, orderFactory, userFactory ,$routeParams, $cookieStore) {
  // Initialize Required Attributes
  var _this = this;


  // -------------------------------------------------------------------------
  //                            Check Logged In User
  // -------------------------------------------------------------------------

  var _this = this

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

  userFactory.findUser($cookieStore.get('user_id'),function(user){
    console.log('returned from user factory with found user',user);
    $scope.user = user
  })

  companyFactory.findCompany($routeParams.company_id,function(company){
    console.log('returned from the controller with the company',company.data);
    $scope.company = company.data
  })

  $scope.start = function(){
    console.log('you clicked Add to order with this product',$scope._product);
    // $scope.products.push($scope.order.product)
    if($scope._product == undefined){
      console.log('did not select a product');
      return
    }
    var contains = false
    if($scope.products.length == 0){
      $scope.products.push($scope._product)
    }
    for (var i = 0; i < $scope.products.length; i++) {
      if($scope._product==$scope.products[i]){
        contains = true
      }
    }
    if(contains == false){
      $scope.products.push($scope._product)
    }
  }
  $scope.confirmOrder = function(){
    if ($scope.order.buyPrice == undefined){
      console.log('no products selected');
      return
    }
    $scope.order.numProducts = 0
    for (var i = 0; i < $scope.products.length; i++) {
      $scope.products[i].buyPrice = $scope.order.buyPrice[i]
      $scope.products[i].quantity = $scope.order.quantity[i]
      $scope.order.numProducts += $scope.order.quantity[i]
      console.log('scope order numProducts',$scope.order.numProducts);
    }
    $scope.order.products = $scope.products
    $scope.order.recipient = $scope.user
    $scope.order.sender = $scope.company
    $scope.order.received = false;
    delete $scope.order.buyPrice
    delete $scope.order.quantity
    console.log('clicked confirm order',$scope.order);
    orderFactory.create($scope.order,function(order_data){
      console.log('returned from order factory with created order',order_data.data);
      if(order_data.data.errors){
        console.log('there were errors creating order',order_data.data.errors);
        $scope.errors = order_data.data.errors
      }
      productFactory.receiveOrder(order_data.data,function(returned_data){
        console.log('returned from the product factory with returned_data',returned_data);
      })
      $location.url('/userdashboard')

    })
  }

}]);
