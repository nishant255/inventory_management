console.log("Loading orderFactory.js");

app.factory('orderFactory', ['$http', function ($http) {

  // Initialize Required Attributes

  function OrderFactory() {

    var _this = this;
    var order = {}

    // -------------------------------------------------------------------------
    //                            Add Required Methods
    // -------------------------------------------------------------------------

    this.index = function(callback){
      console.log('got to the order factory, about to go to the server');
      $http.get('/orders').then(function(returned_data){
        console.log('returned from the server with all orders: ',returned_data.data);
        callback(returned_data);
      })
    }
    this.findOrder = function(order_id,callback){
      console.log('got to the factory with the order id ',order_id);
      $http.get('/orders/', order_id).then(function(returned_data){
        console.log('returned from server with company: ', returned_data.data);
        callback(returned_data)
      })
    }
    this.create = function(order,callback){
      $http.post('/orders/',order).then(function(returned_data){
        console.log('returned form the server with the created company',returned_data.data);
        callback(returned_data);
      })
    }
    this.giveOrder = function(order_data){
      console.log('got to order factory with order',order_data);
      order = order_data
    }
    this.getOrder = function(callback){
      console.log('getting the order from the factory');
      callback(order)
    }

  }
  return new OrderFactory();
}]);
