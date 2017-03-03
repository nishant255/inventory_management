console.log("Loading Clientside inventoryController.js");

app.controller('inventoryController', ['$scope', '$location', '$cookieStore', 'userFactory','productFactory',function ($scope, $location, $cookieStore, userFactory,productFactory) {

  var _this = this
  // Initialize Required Attributes
  $scope.products = []
  $scope.sortType = 'name';
  $scope.sortReverse = true;
  $scope.search = '';
  $scope.errors = []

  var _this = this;

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
  $scope.show = function(product){
    $location.url('/products/'+product._id);
  }

  $scope.findAllProductsWithSellPrice = function(){
    productFactory.findAllProductsWithSellPrice(function(products){
      console.log('back from the factory with all the products with sellprices',products.data);
      $scope.products = products.data
    })
  }
  $scope.updatePrice = function(index){
    console.log('clicked updatePrice',$scope.products[index]);
    productFactory.update($scope.products[index],function(product_data){
      console.log('got back to the inventory controller with TEH product data',product_data);
      if(product_data.data.errors){
        $scope.errors = product_data.data.errors
      }
      $scope.findAllProductsWithSellPrice()
    })
  }
  $scope.findAllProductsforSale = function(){
    productFactory.findAllProductsforSale(function(products){
      console.log('back from the factory with all the products with sellprices',products.data);
      $scope.products = products.data
    })
  }

  var getCurrentUser = function () {
    userFactory.getUser(function (currentUser) {
      _this.currentUser = currentUser;
      if(_this.currentUser.admin==2){
        console.log('normal user logged in');
        $scope.findAllProductsforSale()
      } else {
        $scope.findAllProductsWithSellPrice()
      }
    });
  };
  getCurrentUser();
}]);
