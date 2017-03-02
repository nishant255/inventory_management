console.log("Loading Clientside userDashboardController.js");

app.controller('userDashboardController', ['$scope', '$location', 'productFactory', '$cookieStore',  function ($scope, $location, productFactory, $cookieStore) {

  var _this = this;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  var CheckingUser = function () {
    if ($cookieStore.get('logged-in') === false) {
      $location.url('/login');
    }
  };
  CheckingUser();

}]);
