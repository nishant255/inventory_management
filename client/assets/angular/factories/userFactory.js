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
        console.log(user);
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
        console.log(user);
        console.log(user.success);
        console.log(user.user);
        if (user.success) {
          $cookieStore.put('logged-in', true);
          $cookieStore.put('user_id', user.user._id);
        }
        console.log("Logged user in factory");
        if (typeof(callback) == 'function') {
          callback(user);
        }
      });
    };

    // -------------------------------------------------------------------------
    //                            Logout User
    // -------------------------------------------------------------------------
    _this.logout = function (callback) {
      console.log("Logging Out");
      user = {};
      $cookieStore.remove('logged-in');
      $cookieStore.remove('user_id');
      if (typeof(callback) === 'function') {
        callback("Successfully Logged Out");
      }
    };


  }
  return new UserFactory();
}]);
