console.log("Loading Clientside companyController.js");

app.controller('companyController', ['$scope', '$location', 'companyfactory','$cookieStore', function ($scope, $location, companyfactory, $cookieStore) {

  // Initialize Required Attributes

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  companyfactory.findCompany(id, function(returned_data){
    $scope.company = returned_data;
  })

}]);
