(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            controller: 'CustomersController',
            templateUrl: 'app/views/customer.html'
        }).
        when ('/orders/:customerId', {
            controller: 'OrdersController',
            templateUrl: 'app/views/orders.html'
        }).
        otherwise({redirectTo: '/'});
    } );
    
}());   