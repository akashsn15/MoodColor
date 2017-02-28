(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .controller('Week1.IndexController', Controller);

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
            .state('nextWeek1', {
                url: '/home/',
                templateUrl: 'home/color.html',
                controller: 'Home.ColorController',
                controllerAs: 'vm',
            });
    }
})();