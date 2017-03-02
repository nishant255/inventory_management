console.log("Loading Clientside userDashboardController.js");

app.controller('userDashboardController', ['$scope', '$location', 'productFactory', 'userFactory',  '$cookieStore',  function ($scope, $location, productFactory, userFactory, $cookieStore) {

  var _this = this;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
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

  _this.logout = function () {
    userFactory.logout(function (factoryResponse) {
      console.log(factoryResponse);
    });
  };

}]);
