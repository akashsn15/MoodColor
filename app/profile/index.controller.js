var redCount, yellowCount, greenCount, blueCount, whiteCount, blackCount, greyCount;
var redMood, yellowMood, greenMood, blueMood, whiteMood, blackMood, greyMood;
redCount = 0; redMood = "";
yellowCount = 0; yellowMood = "";
greenCount = 0; greenMood = "";
blueCount = 0; blueMood = "";
whiteCount = 0; whiteMood = "";
blackCount = 0; blackMood = "";
greyCount = 0; greenMood = "";

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Profile.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.saveUser = saveUser;
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
                if(vm.user.week2)
                {
                    for(var i = 0; i<vm.user.week2.length; i++)
                    {
                        var col = vm.user.week2[i].color[0];
                        var mod = vm.user.week2[i].mood[0];
                        if(col == "Red")
                        {
                            redCount++;
                            redMood += mod + ", ";

                        }
                        else if(col == "Yellow")
                        {
                            yellowCount++;
                            yellowMood += mod + ", ";
                        }
                        else if(col == "Green")
                        {
                            greenCount++;
                            greenMood += mod + ", ";
                        }
                        else if(col == "Blue")
                        {
                            blueCount++;
                            blueMood += mod + ", ";
                        }
                        else if(col == "White")
                        {
                            whiteCount++;
                            whiteMood += mod + ", ";
                        }
                        else if(col == "Black")
                        {
                            blackCount++;
                            blackMood += mod + ", ";
                        }
                        else if(col == "Grey")
                        {
                            greyCount++;
                            greyMood += mod + ", ";
                        }
                    }
                }
            });            
        }

        function saveUser() {
            UserService.Update(vm.user)
                .then(function () {
                    FlashService.Success('User updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function deleteUser() {
            UserService.Delete(vm.user._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();