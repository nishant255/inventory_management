console.log("Loading Clientside addCompanyController.js");

app.controller('addCompanyController', ['$scope', '$location', 'productFactory','companyFactory', '$cookieStore' ,function ($scope, $location, productFactory, companyFactory, $cookieStore) {


  var self = this;
  var _this = this;


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
