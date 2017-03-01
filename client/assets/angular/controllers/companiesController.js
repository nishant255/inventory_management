console.log("Loading Clientside companiesController.js");

app.controller('companiesController', ['$scope', '$location', function ($scope, $location) {

  // Initialize Required Attributes
  $scope.companies = [
    {
      _id: 1,
      name: "Bob's Burgers",
      products: [
        {
          _id: 42,
          name: 'burger',
          sellPrice: 150,
          quantity: 32
        },
        {
          _id: 42,
          name: 'bun',
          sellPrice: 150,
          quantity: 32
        }
      ],
      email: 'bob@bobbins.com',
      phone: 8438302918,
      address: {
        street: '123 hacker way',
        city: 'cupertino',
        zipcode: 12345,
        state: "CA"
      }
    },
    {
      _id: 2,
      name: "Marcus's Caricatures",
      products: [
        {
          _id: 3,
          name: 'blackandwhite',
          sellPrice: 42,
          quantity: 100
        },
        {
          _id: 5,
          name: 'color',
          sellPrice: 300,
          quantity: 3
        }
      ],
      email: 'marcus@meats.com',
      phone: 8438302918,
      address: {
        street: '666 satan street',
        city: 'hadesland',
        zipcode: 66666,
          state: "texas"
      }
    }
  ];
  // $scope.sortType = 'name';
  // $scope.sortReverse = true;
  // $scope.search = '';

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  $scope.show = function(company){
    $location.url('/companies/'+company._id);
  }
}]);
