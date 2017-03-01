console.log("Loading Clientside loginController.js");

app.controller('loginController', ['$scope', '$location', 'userFactory', function ($scope, $location, userFactory) {

  var _this = this;
  _this.newUser = {}

  // -------------------------------------------------------------------------
  //                            Create New User
  // -------------------------------------------------------------------------
  _this.createUser = function () {
    console.log(_this.newUser);
  }

}]);
