(function() {
    
    var CustomersController = function ($scope, customerFactory, customerService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        function init() {
             customerFactory.getCustomers()
                 .then(function({data}) {
                    $scope.customers = data;
                 }, function(data, status, header, config) {
                //error handelling
                  });
        }
        init();
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        
    };
    
    CustomersController.$inject = ['$scope', 'customerFactory', 'customerService', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());