var moods;
(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .controller('Week2.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        initController();
        
        vm.updt = updt;


        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function updt() {
            moods = vm.user.moods;
        }
    }

    function config($stateProvider, $urlRouterProvider) {
    //route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('next', {
                url: '/home/',
                templateUrl: 'home/color.html',
                controller: 'Home.ColorController',
                controllerAs: 'vm',
            });
    }

})();