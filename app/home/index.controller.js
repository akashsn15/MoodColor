(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .controller('Home.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
    }

    function config($stateProvider, $urlRouterProvider) {
    //route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('week1', {
                url: '/home/week1',
                templateUrl: 'home/week1/index.html',
                controller: 'Week1.IndexController',
                controllerAs: 'vm',
            })
            .state('week2', {
                url: '/home/week2',
                templateUrl: 'home/week2/index.html',
                controller: 'Week2.IndexController',
                controllerAs: 'vm',
            });
    }

})();