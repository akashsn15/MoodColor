(function () {
    'use strict';

    angular
        .module('app')
        .controller('Week2.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.saveUser = saveUser;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function saveUser() {
            UserService.Update(vm.user)
                .then(function () {
                    FlashService.Success('User Value updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();