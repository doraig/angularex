(function(){
    
    var customerService = function($http) {
       
        
        this.getCustomers = function() {
            return $http.get('/customers');  
        };
        this.getCustomer = function(customerId) {
            return $http.get('/customers/'+ customerId);
        };
    }
    customerService.$inject = ['$http'];
    angular.module('customersApp').service('customerService', customerService);
    
 }());