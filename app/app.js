﻿(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('profile', {
                url: '/',
                templateUrl: 'profile/index.html',
                controller: 'Profile.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'profile' }
            })
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
            })
            .state('home', {
                url: '/home',
                templateUrl: 'home/index.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            });            
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        if($rootScope.activeTab != null)
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;

            angular.bootstrap(document, ['app']);
        });
    });
})();