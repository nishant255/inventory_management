console.log("Loading Clientside companyController.js");

app.controller('companyController', ['$scope', '$location', 'companyfactory' function ($scope, $location, companyfactory) {

  // Initialize Required Attributes
  var $scope.company;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  companyfactory.findCompany(id, function(returned_data){
    $scope.company = returned_data;
  })

}]);
