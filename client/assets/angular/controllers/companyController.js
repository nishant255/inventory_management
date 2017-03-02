console.log("Loading Clientside companyController.js");

app.controller('companyController', ['$scope', '$location', 'companyfactory','$cookieStore', function ($scope, $location, companyfactory, $cookieStore) {

  // Initialize Required Attributes
  // -------------------------------------------------------------------------
  //                            Check Logged In User
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

  // -------------------------------------------------------------------------
  //                            Log Out User
  // -------------------------------------------------------------------------
  _this.logout = function () {
    userFactory.logout(function (factoryResponse) {
      console.log(factoryResponse);
    });
  };

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  companyfactory.findCompany(id, function(returned_data){
    $scope.company = returned_data;
  })

}]);
