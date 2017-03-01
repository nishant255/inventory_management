console.log("Loading userFactory.js");

app.factory('userFactory', ['$http', function ($http) {

  // Initialize Required Attributes

  function UserFactory() {

    var _this = this;

    // -------------------------------------------------------------------------
    //                            Create User
    // -------------------------------------------------------------------------
    _this.createUser = function (newUser, callback) {
      $http.post('/user', newUser).then(function (dataFromServer) {
        console.log("User from Server");
        console.log(dataFromServer);
        user = dataFromServer.data;
        if (typeof(callback) == 'function') {
          callback(user);
        }
      });
    };

  }
  return new UserFactory();
}]);
