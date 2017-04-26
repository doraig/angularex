(function() {
    
    var OrdersController = function ($scope, $routeParams, customerFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
            customerFactory.getCustomer(customerId)
                .then(function({data}) {
                    $scope.customer = data;
                    },function (data, status, header, config) {
                        //to do errors.
                    }
                    );
            
        }
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customerFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());