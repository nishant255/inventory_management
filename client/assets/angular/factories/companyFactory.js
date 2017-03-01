console.log("Loading company.js");

app.factory('companyFactory', ['$http', function ($http) {

  // Initialize Required Attributes

  function CompanyFactory() {

    var _this = this;

    // -------------------------------------------------------------------------
    //                            Add Required Methods
    // -------------------------------------------------------------------------

    this.index = function(callback){
      console.log('got to the company factory, about to go to the server');
      $http.get('/companies').then(function(returned_data){
        console.log('returned from the server with all companies: ',returned_data.data);
        callback(returned_data);
      })
    }
    this.findCompany = function(company_id,callback){
      console.log('got to the factory with the company id ',company_id);

    }
    this.create = function(company,callback){
      $http.post('/companies/',company).then(function(returned_data){
        console.log('returned form the server with the created company',returned_data.data);
        callback(returned_data);
      })
    }
  }
  return new CompanyFactory();
}]);
