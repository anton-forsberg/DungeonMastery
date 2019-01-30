(function(angular){
    angular.module('dungeonmastery', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngCookies', 'ngclipboard']);
    angular.module('dungeonmastery').config(configFunction);
    angular.module('dungeonmastery').run(runFunction);
    
    runFunction.$inject = ['$rootScope'];
    
    function configFunction($routeProvider) {
         $routeProvider.when('/sheet', {
                templateUrl: '/views/sheet.html',
                controller: 'sheetController',
                controllerAs: 'vm'
            }).when('/campaigns', {
                templateUrl: '/views/campaigns.html',
                controller: 'campaignsController',
                controllerAs: 'vm'
            }).when('/campaign', {
                templateUrl: '/views/campaign.html',
                controller: 'campaignController',
                controllerAs: 'vm'
            }).when('/login', {
                templateUrl: '/views/login.html',
                controller: 'loginController',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/sheet'
            });
    }
    
    function runFunction($rootScope){

    }
})(window.angular);