(function () {
    'use strict';

    angular
        .module('app')
        .controller('Week2.IndexController', Controller);

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
            console.log(vm.user);
            UserService.UpdateValue(vm.user)
                .then(function () {
                    FlashService.Success('User Value updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();