console.log("Loading product.js");

app.factory('productFactory', ['$http', function ($http) {

  // Initialize Required Attributes

  function ProductFactory() {

    var _this = this;

    // -------------------------------------------------------------------------
    //                            Add Required Methods
    // -------------------------------------------------------------------------
    _this.create = function(product,company,callback){
      console.log('got to the product factory with the product and company',product, company);
      product._company = company
      $http.post('/products/',product).then(function(returned_data){
        console.log('returned from the server with created product',returned_data.data);
        callback(returned_data);
      })
    }
  }
  return new ProductFactory();
}]);
