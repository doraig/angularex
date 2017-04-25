(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function ($routeProvider) {
         $routeProvider.when("/" , {
                controller: "SimpleController",
                templateUrl: "app/views/customers.html"
         }).when("/orders/:customerId" , {
                controller: "OrdersController",
                templateUrl: "app/views/orders.html"
         }).otherwise( {redirectTo: '/'});
    });

}()); 