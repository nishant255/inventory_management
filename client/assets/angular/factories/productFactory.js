console.log("Loading productFactory.js");

app.factory('productFactory', ['$http', function ($http) {

  // Initialize Required Attributes

  function ProductFactory() {

    var _this = this;

    // -------------------------------------------------------------------------
    //                            Add Required Methods
    // -------------------------------------------------------------------------
    this.index = function(callback){
      console.log('got to the product factory, about to go to the server');
      $http.get('/products').then(function(returned_data){
        console.log('returned from the server with all products: ',returned_data.data);
        callback(returned_data);
      })
    }
    this.findProduct = function(product_id,callback){
      console.log('got to the factory with the order id ',product_id);
      $http.get('/products/', product_id).then(function(returned_data){
        console.log('returned from server with product: ', returned_data.data);
        callback(returned_data)
      })
    }
    this.create = function(product,company,callback){
      product._company = company
      $http.post('/products/',product,company).then(function(returned_data){
        console.log('returned form the server with the created company',returned_data.data);
        callback(returned_data);
        if (returned_data.data.errors) {
          console.log('there was an error',returned_data.data.errors);
        }
      })
    }
  }
  return new ProductFactory();
}]);
