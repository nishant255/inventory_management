console.log("Loading Clientside addCompanyController.js");

app.controller('addCompanyController', ['$scope', '$location', 'productFactory','companyFactory', function ($scope, $location, productFactory, companyFactory) {

  // Initialize Required Attributes

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  var self = this;

  this.create = function(){
    console.log('you clicked create company',$scope.company);
    companyFactory.create($scope.company,function(company){
      console.log('returned to the addCompanyController with created company',company.data);
      $location.url('/')
    })
  }

}]);
