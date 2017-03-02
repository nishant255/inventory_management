console.log("Loading Clientside loginController.js");

app.controller('loginController', ['$scope', '$location', 'userFactory', '$cookieStore',  function ($scope, $location, userFactory, $cookieStore) {

  var _this = this;
  _this.existingUser = {};
  _this.error_messages = [];

  // -------------------------------------------------------------------------
  //                            Login User
  // -------------------------------------------------------------------------
  _this.login = function () {
    console.log(_this.existingUser);
    userFactory.login(_this.existingUser, function (dataFromServer) {
      if (dataFromServer.success === false) {
        console.log(dataFromServer.error_messages);
        _this.success = false;
        _this.error_messages = dataFromServer.error_messages;
      } else {
        _this.existingUser = {};
        $location.url('/userdashboard');
      }
    });
  };

  // -------------------------------------------------------------------------
  //                            Login User
  // -------------------------------------------------------------------------
  _this.logout = function () {
    userFactory.logout(function (dataFromServer) {
      _this.existingUser = {};
      _this.success = false;
      _this.error_messages = ["Successfully Logged Out"];
      $location.url('/');
    });
  };

}]);
