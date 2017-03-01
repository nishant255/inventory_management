console.log("Loading Clientside registerController.js");

app.controller('registerController', ['$scope', '$location', 'userFactory', function ($scope, $location, userFactory) {

  var _this = this;
  _this.newUser = {};
  _this.error_messages = [];

  // -------------------------------------------------------------------------
  //                            Create New User
  // -------------------------------------------------------------------------
  _this.createUser = function () {
    userFactory.createUser(_this.newUser, function (dataFromServer) {
      if (!dataFromServer.success) {
        console.log(dataFromServer.error_messages);
        _this.success = false;
        _this.error_messages = dataFromServer.error_messages;
      }
    });
  };

}]);
