(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .controller('Home.ColorController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        initController();
        
        vm.saveUserValue = saveUserValue;


        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function saveUserValue() {
        	if(moods)
            {
                vm.user.moods = moods;
                moods = null;
            }
            else
                vm.user.points = points;
            
            vm.user.color = data.label;
            UserService.UpdateValue(vm.user)
                .then(function () {
                    FlashService.Success('User Value updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

    function config($stateProvider, $urlRouterProvider) {
    //route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('submit', {
                url: '/profile/',
                templateUrl: 'profile/index.html',
                controller: 'Profile.IndexController',
                controllerAs: 'vm',
            });
    }

})();