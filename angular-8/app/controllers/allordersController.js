(function() {
    
    var AllOrdersController = function ($scope, customerFactory, customerService, appSettings) {
        $scope.orders = null;
        $scope.orderTotal = 0.0;
        $scope.totalType;
        $scope.appSettings = appSettings;
        function init() {
             customerFactory.getOrders()
                 .then(function({data}) {
                    $scope.orders = data;
                    getOrderTotal();
                 }, function(data, status, header, config) {
                    //error handelling
                  });
        }
        
        function getOrderTotal() {
            var total = 0;
            for (var i = 0, len = $scope.orders.length; i < len; i++ ) {
                total += $scope.orders[i].total;
            }
            $scope.orderTotal = total;
            $scope.totalType = (total > 100) ? 'success' : 'danger';
        }
        init();
        
        
        
    };
    
    AllOrdersController.$inject = ['$scope', 'customerFactory', 'customerService', 'appSettings'];

    angular.module('customersApp')
      .controller('AllOrdersController', AllOrdersController);
    
}());