console.log("Loading userFactory.js");

app.factory('userFactory', ['$http', '$cookieStore', function ($http, $cookieStore) {

  // Initialize Required Attributes

  function UserFactory() {

    var _this = this;
    var user = {};

    // -------------------------------------------------------------------------
    //                            Create User
    // -------------------------------------------------------------------------
    _this.createUser = function (newUser, callback) {
      $http.post('/user', newUser).then(function (dataFromServer) {
        console.log("User from Server");
        console.log(dataFromServer);
        user = dataFromServer.data;
        $cookieStore.put('logged-in', true);
        $cookieStore.put('user_id', user._id);
        if (typeof(callback) == 'function') {
          callback(user);
        }
      });
    };

    // -------------------------------------------------------------------------
    //                            Login User
    // -------------------------------------------------------------------------
    _this.login = function (existingUser, callback) {
      $http.post('/user_login', existingUser).then(function (dataFromServer) {
        console.log("User from Server");
        console.log(dataFromServer);
        user = dataFromServer.data;
        $cookieStore.put('logged-in', true);
        $cookieStore.put('user_id', user._id);
        if (typeof(callback) == 'function') {
          callback(user);
        }
      });
    };

  }
  return new UserFactory();
}]);
