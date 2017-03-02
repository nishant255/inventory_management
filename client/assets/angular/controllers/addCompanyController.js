console.log("Loading Clientside addCompanyController.js");

app.controller('addCompanyController', ['$scope', '$location', 'productFactory','companyFactory', '$cookieStore' ,function ($scope, $location, productFactory, companyFactory, $cookieStore) {


  var self = this;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  var CheckingUser = function () {
    console.log("Removing User");
    $cookieStore.remove('logged-in');
  };
  CheckingUser();

  // -------------------------------------------------------------------------
  //                            Create Company
  // -------------------------------------------------------------------------

  this.create = function(){
    console.log('you clicked create company',$scope.company);
    companyFactory.create($scope.company,function(company){
      console.log('returned to the addCompanyController with created company',company.data);
      $location.url('/');
    });
  };

}]);
